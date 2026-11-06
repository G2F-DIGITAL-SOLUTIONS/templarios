# CONTEXTO — Reestruturação institucional OICMCTB

## Status

- Branch: `feat/reestruturacao-oicmctb`
- Projeto: `/Users/gabrielnicolim/Documents/g2f/templarios`
- Stack: Astro 7 (SSG), Tailwind CSS 4, TypeScript strict
- Idiomas: pt (fonte), en, it, fr, es — dicionários completos
- Build: 45 páginas de conteúdo + 140 redirecionamentos estáticos
- `npm run check`: 0 erros, 0 warnings
- `npm run check:i18n`: 0 erros, 0 warnings
- `npm run build`: concluído

## Arquitetura implementada

Rotas consolidadas: `home`, `order`, `heritage`, `society`, `participate`, `privacy`, `terms`, `cookies`, `notFound`.

Views: `HomeView`, `OrderPage`, `HeritagePage`, `SocietyPage`, `ParticipatePage`, `LegalPage`, `NotFoundPage`.

Conteúdo removido/consolidado: páginas de eventos, conhecimento, iniciativas individuais, doações, Dia das Cidades, FAQ, contato, afiliação, ABTL, Damas, Brasão e Informações Institucionais. Seus conteúdos foram absorvidos pelas cinco páginas principais.

## Conteúdo editorial

- Identidade: Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB).
- Removidas referências a OSMTH Brasil, ordem-mãe em Portugal, autoridade eclesiástica e vínculo com a Maçonaria (com seção explícita de independência).
- Removidos eventos, artigos, projetos, taxas, valores e benefícios fiscais não confirmados.
- Brasão explicado a partir do documento institucional (pp. 32–40), sem recriar a arte oficial.
- Dados institucionais exibidos com ressalva de validação.

## i18n

- `src/i18n/dictionaries/{pt,en,it,fr,es}.ts` completos.
- `src/i18n/dictionaries.ts` não faz fallback para português.
- `src/i18n/routes.ts` concentra slugs por idioma.
- `scripts/check-i18n.mjs` verifica chaves ausentes, arrays, valores vazios, texto literal e termos legados.
- `src/i18n/legacy-redirects.ts` + `scripts/generate-redirects.mjs` geram redirects Astro, Netlify e Vercel.

## Pendências

1. Arquivo vetorial oficial do brasão.
2. Validação externa do CNPJ e da razão social.
3. Confirmação do e-mail e dos perfis sociais.
4. Revisão jurídica dos textos legais.
5. Endpoint do formulário (hoje `mailto:`).
6. Imagem OG oficial.
