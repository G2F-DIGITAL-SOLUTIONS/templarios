# OICMCTB — Site institucional

Site institucional estático da **Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB)**.

O projeto substitui a identidade editorial anterior (OSMTH Brasil / “Ordem dos Cavaleiros Templários”) por uma arquitetura enxuta, em cinco páginas, com conteúdo institucional verificado, cinco idiomas completos e redirecionamentos permanentes das rotas antigas.

- Produção: <https://templariosdobrasil.com>
- Stack: Astro 7 (SSG), Tailwind CSS 4, TypeScript strict
- Idiomas: Português (padrão), English, Italiano, Français, Español

---

## Como rodar

```bash
npm install
npm run dev          # http://localhost:4321
npm run check        # astro check (TypeScript + Astro)
npm run check:i18n   # integridade das traduções e termos proibidos
npm run build        # build estático em dist/
npm run preview      # serve dist/ localmente
npm run verify       # check + check:i18n + build
```

Requisitos: Node.js 20+.

O `prebuild` executa `npm run redirects` automaticamente. Esse script gera:

- `redirects.generated.mjs` — consumido por `astro.config.mjs` (páginas de redirecionamento estáticas);
- `public/_redirects` — regras 301 para Netlify / Cloudflare Pages;
- o bloco `redirects` de `vercel.json` — regras 301 para Vercel.

A fonte única é `src/i18n/legacy-redirects.ts`.

---

## Arquitetura pública

| Página | PT | EN | IT | FR | ES |
| --- | --- | --- | --- | --- | --- |
| Início | `/` | `/en/` | `/it/` | `/fr/` | `/es/` |
| A Ordem | `/ordem` | `/en/order` | `/it/ordine` | `/fr/ordre` | `/es/orden` |
| História e Brasão | `/historia-e-brasao` | `/en/history-and-coat-of-arms` | `/it/storia-e-stemma` | `/fr/histoire-et-blason` | `/es/historia-y-escudo` |
| Cultura e Atuação Social | `/cultura-e-atuacao-social` | `/en/culture-and-social-action` | `/it/cultura-e-azione-sociale` | `/fr/culture-et-action-sociale` | `/es/cultura-y-accion-social` |
| Participar e Contato | `/participe` | `/en/participate` | `/it/partecipa` | `/fr/participer` | `/es/participa` |
| Privacidade | `/politica-de-privacidade` | `/en/privacy-policy` | `/it/informativa-privacy` | `/fr/politique-de-confidentialite` | `/es/politica-de-privacidad` |
| Termos | `/termos` | `/en/terms` | `/it/termini` | `/fr/conditions` | `/es/terminos` |
| Cookies | `/cookies` | `/en/cookies` | `/it/cookie` | `/fr/cookies` | `/es/cookies` |

As rotas antigas (`/historia`, `/propositos`, `/iniciativas`, `/eventos`, `/conhecimento`, `/doacoes`, `/afiliacao`, `/faq`, `/contato`, `/brasao`, `/abtl`, `/damas-templarias`, `/informacoes-institucionais`, `/loja`, `/tv`, entre outras) redirecionam permanentemente para a página consolidada equivalente, preservando o idioma.

---

## Estrutura

```text
src/
├── pages/
│   ├── [...slug].astro       # gera todas as rotas × 5 idiomas
│   └── 404.astro
├── routes.ts                 # RouteKey → view
├── views/
│   ├── HomeView.astro
│   ├── OrderPage.astro
│   ├── HeritagePage.astro
│   ├── SocietyPage.astro
│   ├── ParticipatePage.astro
│   ├── LegalPage.astro
│   └── NotFoundPage.astro
├── components/
│   ├── Header.astro / Footer.astro / LanguageSwitcher.astro
│   ├── CastleEntrance.astro / CastleDoor.astro / PageHero.astro
│   ├── ContactForm.astro / SEO.astro
│   └── ui/                   # Section, SectionHeading, CTA, Emblem, Icon…
├── i18n/
│   ├── config.ts             # locales, tags BCP-47
│   ├── routes.ts             # slugs por idioma
│   ├── legacy-redirects.ts   # mapa de redirecionamentos 301
│   ├── dictionaries.ts       # seleção de dicionário (sem fallback para pt)
│   └── dictionaries/         # pt (fonte), en, it, fr, es — completos
├── config/
│   ├── site.ts               # dados institucionais
│   └── navigation.ts         # menu e rodapé
└── layouts/BaseLayout.astro
```

---

## Conteúdo e regras editoriais

- A razão social e a sigla permanecem em português em todos os idiomas; não se cria uma “tradução oficial” do nome jurídico.
- Não há vínculo institucional com a Maçonaria, com ordens estrangeiras ou com autoridade eclesiástica. A página **A Ordem** traz uma seção específica sobre independência.
- A inspiração na tradição templária é apresentada como memória e valores, sem alegar continuidade jurídica com a ordem medieval.
- O brasão é explicado a partir do material heráldico fornecido (selo, escudo, elmo, paquifes, timbre, grito de guerra, divisa, cores e fidelidade gráfica). O site **não recria** a arte oficial.
- Não são publicados eventos, artigos, projetos, publicações, taxas, mensalidades, benefícios fiscais ou regras de afiliação não confirmados.
- Endereço e telefone não são publicados por falta de confirmação institucional.
- Dados cadastrais aparecem com a ressalva de que não substituem certidão ou consulta aos registros oficiais.

### Como editar textos

1. Edite primeiro `src/i18n/dictionaries/pt.ts` (fonte da verdade).
2. Replique a mesma chave/estrutura nos demais dicionários (`en.ts`, `it.ts`, `fr.ts`, `es.ts`).
3. Rode `npm run check:i18n`. O script falha em chaves ausentes, arrays com tamanho diferente, valores vazios, texto literal em markup e termos legados.
4. Rode `npm run check` e `npm run build`.

---

## i18n

- O seletor de idioma aponta para a **página equivalente**, não para a home.
- `<html lang>`, `hreflang`, canonical, Open Graph e JSON-LD são atualizados por locale.
- Não há fallback silencioso para português: os cinco dicionários são completos e verificados no build.
- Rotas legadas são redirecionadas mantendo o idioma e, quando aplicável, a âncora da seção consolidada.

---

## Identidade visual

- Tipografia: Cinzel Variable e Cormorant Garamond Variable (títulos), Inter Variable (interface), self-hosted.
- O emblema genérico do site é uma composição simplificada (portão + cruz de Malta) e **não** representa o brasão oficial.
- O arquivo vetorial oficial do brasão deve ser fornecido pela Ordem para aplicações que exijam arte final.

---

## Deploy

O build gera HTML estático em `dist/`. Configurações de hospedagem incluídas:

- `public/_headers` — cache e cabeçalhos de segurança;
- `public/_redirects` — 301 (Netlify / Cloudflare Pages);
- `vercel.json` — headers e 301 (Vercel);
- `netlify.toml` — build e headers;
- `public/robots.txt` — sitemap de produção;
- `@astrojs/sitemap` — `sitemap-index.xml`.

---

## Pendências institucionais

1. Arquivo vetorial oficial do brasão (CDR/SVG/PDF) para substituir o emblema genérico onde for necessário.
2. Validação do CNPJ `42.071.770/0001-75` e da situação cadastral em fontes oficiais.
3. Confirmação do e-mail `oicmctb@gmail.com` e dos perfis `@oicmctb`.
4. Revisão jurídica dos textos de Privacidade, Termos e Cookies.
5. Definição de endpoint para o formulário de contato (hoje há fallback `mailto:`).
6. Substituição de `public/og-default.png` por imagem oficial, se desejado.
