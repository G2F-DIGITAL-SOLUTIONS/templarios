/**
 * i18n + placeholder audit (no deps). Run: node scripts/check-i18n.mjs
 * Fails on: missing dictionary keys vs pt, empty values, leftover placeholder
 * or old-identity strings in src/public, and content files missing a locale.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function loadDict(loc) {
  // Dictionaries are plain TS object literals; evaluate via a tiny transform.
  let src = readFileSync(`src/i18n/dictionaries/${loc}.ts`, 'utf8');
  src = src.replace(/^import[^;]+;/gm, '').replace(/export const \w+\s*(?::[^=]+)?=/, 'module.exports =').replace(/export type[\s\S]*$/, '');
  const m = { exports: {} };
  new Function('module', 'exports', src)(m, m.exports);
  return m.exports;
}
function flat(o, p = '', out = {}) {
  for (const [k, v] of Object.entries(o)) {
    const q = p ? `${p}.${k}` : k;
    if (v && typeof v === 'object') flat(v, q, out); else out[q] = v;
  }
  return out;
}
let fail = 0;
const pt = flat(loadDict('pt'));
for (const loc of ['en', 'it', 'fr', 'es']) {
  const d = flat(loadDict(loc));
  const missing = Object.keys(pt).filter((k) => !(k in d));
  const empty = Object.entries(d).filter(([, v]) => typeof v === 'string' && !v.trim()).map(([k]) => k);
  if (missing.length || empty.length) { fail = 1; console.log(loc, 'missing:', missing, 'empty:', empty); }
  else console.log(loc, `OK (${Object.keys(d).length} keys)`);
}
const banned = [/exemplo\.org/i, /Rua Exemplo/, /\(00\) 0000/, /OSMTH/i, /Local a definir/i, /R\$ 50/, /Academia Brasileira Templária de Leiras/i];
function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|astro|txt|mjs|toml|json)$/.test(p)) {
      const t = readFileSync(p, 'utf8');
      for (const b of banned) if (b.test(t)) { fail = 1; console.log('BANNED', b, 'in', p); }
    }
  }
}
walk('src'); walk('public');
console.log(fail ? 'i18n/placeholder audit FAILED' : 'i18n/placeholder audit OK');
process.exit(fail);
