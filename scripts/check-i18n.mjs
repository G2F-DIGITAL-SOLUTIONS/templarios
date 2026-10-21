#!/usr/bin/env node
/**
 * i18n and content guardrails.
 *
 * Errors (exit 1):
 *  - missing keys in any locale (compared with the Portuguese source);
 *  - array length mismatches;
 *  - empty strings or empty arrays;
 *  - literal (hardcoded) text left in Astro markup;
 *  - legacy identity / placeholder terms anywhere in `src` or `public`.
 *
 * Warnings:
 *  - dictionary keys that no source file appears to reference.
 *
 * Run with `npm run check:i18n`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, relative, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

/** Load every dictionary (Node strips the TypeScript type annotations). */
const dictionaries = {};
for (const locale of ['pt', 'en', 'it', 'fr', 'es']) {
  const module = await import(resolve(root, `src/i18n/dictionaries/${locale}.ts`));
  dictionaries[locale] = module[locale];
}

const source = dictionaries.pt;

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function walk(value, path, visit) {
  visit(value, path);
  if (isPlainObject(value)) {
    for (const [key, child] of Object.entries(value)) {
      walk(child, path ? `${path}.${key}` : key, visit);
    }
  }
}

/** Structural comparison against the Portuguese source. */
for (const locale of Object.keys(dictionaries)) {
  if (locale === 'pt') continue;
  const dict = dictionaries[locale];

  walk(source, '', (value, path) => {
    if (!path) return;
    const parts = path.split('.');
    let target = dict;
    for (const part of parts) {
      if (!isPlainObject(target) || !(part in target)) {
        errors.push(`[${locale}] missing key: ${path}`);
        return;
      }
      target = target[part];
    }

    if (Array.isArray(value)) {
      if (!Array.isArray(target)) {
        errors.push(`[${locale}] expected array at ${path}`);
      } else if (target.length !== value.length) {
        errors.push(
          `[${locale}] array length mismatch at ${path}: expected ${value.length}, got ${target.length}`,
        );
      }
    } else if (isPlainObject(value)) {
      if (!isPlainObject(target)) errors.push(`[${locale}] expected object at ${path}`);
    } else if (typeof target !== typeof value) {
      errors.push(`[${locale}] type mismatch at ${path}`);
    }
  });
}

/** Empty values. */
for (const [locale, dict] of Object.entries(dictionaries)) {
  walk(dict, '', (value, path) => {
    if (!path) return;
    if (typeof value === 'string' && value.trim() === '') {
      errors.push(`[${locale}] empty string: ${path}`);
    }
    if (Array.isArray(value) && value.length === 0) {
      errors.push(`[${locale}] empty array: ${path}`);
    }
  });
}

/** Collect source files. */
async function collect(directory, extensions) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collect(full, extensions)));
    } else if (extensions.includes(extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const sourceFiles = await collect(resolve(root, 'src'), ['.astro', '.ts', '.md', '.mdx']);
const publicFiles = await collect(resolve(root, 'public'), ['.svg', '.txt', '.json', '.html']);

/** Literal text in Astro markup (excludes frontmatter, scripts and styles). */
for (const file of sourceFiles.filter((name) => name.endsWith('.astro'))) {
  let text = await readFile(file, 'utf8');
  text = text.replace(/^---[\s\S]*?---/, '');
  text = text.replace(/<script[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
  text = text.replace(/<!--[\s\S]*?-->/g, '');

  const matches = text.matchAll(/>([^<>{}]+)</g);
  for (const match of matches) {
    const literal = match[1].replace(/\s+/g, ' ').trim();
    if (!literal) continue;
    if (!/[\p{L}]/u.test(literal)) continue;
    if (/^&[a-z#0-9]+;$/i.test(literal)) continue;
    if (literal.length < 3) continue;
    errors.push(`[hardcoded text] ${relative(root, file)}: “${literal}”`);
  }
}

/** Legacy identity and placeholder terms. */
const forbidden = [
  { label: 'OSMTH', pattern: /\bOSMTH\b/i },
  { label: 'old order name', pattern: /Ordem dos Cavaleiros Templários/i },
  { label: 'placeholder street', pattern: /Rua Exemplo/i },
  { label: 'placeholder domain', pattern: /exemplo\.org/i },
  { label: 'removed project', pattern: /Dia das Cidades/i },
  { label: 'removed tax claim', pattern: /\bIRPF\b/ },
  { label: 'unverified amount', pattern: /R\$\s?\d/ },
  { label: 'Portugal dependency', pattern: /(?:Grão-Mestrado|obediência|subordina\w*)\s+(?:de|a|ao)\s+Portugal/i },
];

for (const file of [...sourceFiles, ...publicFiles]) {
  const text = await readFile(file, 'utf8');
  for (const rule of forbidden) {
    if (rule.pattern.test(text)) {
      errors.push(`[legacy: ${rule.label}] ${relative(root, file)}`);
    }
  }
}

/** Unused dictionary keys — heuristic based on source references. */
const projectText = (
  await Promise.all(
    sourceFiles
      .filter(
        (file) =>
          !file.includes(`${join('src', 'i18n', 'dictionaries')}`) &&
          !file.endsWith(join('i18n', 'routes.ts')) &&
          !file.endsWith(join('i18n', 'legacy-redirects.ts')),
      )
      .map(async (file) => readFile(file, 'utf8')),
  )
).join('\n');

const skipRoots = new Set(['meta', 'nav', 'footer', 'pages', 'legal']);

walk(source, '', (value, path) => {
  if (!path || isPlainObject(value)) return;
  const parts = path.split('.');
  if (skipRoots.has(parts[0])) return;
  const key = parts[parts.length - 1];
  if (key.length <= 2) return;
  if (!projectText.includes(key)) {
    warnings.push(`unused dictionary key: ${path}`);
  }
});

if (warnings.length > 0) {
  console.warn(`\n⚠ ${warnings.length} warning(s):`);
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

if (errors.length > 0) {
  console.error(`\n✖ ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `\n✓ i18n OK — ${Object.keys(dictionaries).length} locales, no missing keys, no empty values, no hardcoded text, no legacy terms.`,
);
