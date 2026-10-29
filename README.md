# OICMCTB — Site institucional

> "Um castelo templário contemporâneo na web."

Site institucional estático da **Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB)**.
A experiência parte da metáfora do **castelo virtual** — portas, arcos, pedra,
pergaminho, cruz templária e iluminação quente — construída somente com
**composição visual, tipografia, texturas e hierarquia**, sem animações pesadas,
parallax, WebGL ou vídeos.

O resultado é um site rápido, acessível, multilíngue (PT · EN · IT · FR · ES),
otimizado para SEO e pronto para deploy estático.

---

## Sumário

1. [Stack](#1-stack)
2. [Como rodar](#2-como-rodar)
3. [Arquitetura do projeto](#3-arquitetura-do-projeto)
4. [Internacionalização (i18n)](#4-internacionalização-i18n)
5. [Conteúdo e como editar](#5-conteúdo-e-como-editar)
6. [Design system](#6-design-system)
7. [SEO, acessibilidade e performance](#7-seo-acessibilidade-e-performance)
8. [Deploy](#8-deploy)
9. [Conectar formulários e CMS](#9-conectar-formulários-e-cms)
10. [Convenções de código](#10-convenções-de-código)

---

## 1. Stack

| Camada        | Escolha                                              |
| ------------- | ---------------------------------------------------- |
| Framework     | [Astro v7](https://astro.build) (`output: 'static'`) |
| Estilo        | Tailwind CSS v4 via `@tailwindcss/vite` + tokens CSS |
| Linguagem     | TypeScript (strict)                                  |
| Tipografia    | `@fontsource-variable/*` (self-hosted, sem requests externos) |
| Sitemap       | `@astrojs/sitemap`                                   |
| Checagem      | `@astrojs/check` + `typescript`                      |

Sem banco de dados, sem Node server persistente, sem Docker. O build produz
**HTML estático puro** em `dist/`.

Fontes self-hosted (zero requests para Google Fonts):

- **Títulos:** Cinzel Variable + Cormorant Garamond Variable
- **Interface:** Inter Variable

---

## 2. Como rodar

```bash
npm install          # instala dependências

npm run dev          # servidor de desenvolvimento (http://localhost:4321)
npm run check        # astro check (0 erros esperados)
npm run build        # gera o site estático em dist/
npm run preview      # serve o build de produção localmente
```

Requisitos: **Node.js 20+** e npm.

---

## 3. Arquitetura do projeto

```text
src/
├── pages/
│   ├── [...slug].astro      # Gera todas as páginas de conteúdo (SSG)
│   └── 404.astro            # Página 404
├── routes.ts                # Mapa RouteKey → view (fonte única do espaço de URL)
├── layouts/
│   └── BaseLayout.astro     # <html>, <head>, header/footer, skip-link
├── views/                   # Uma view por tipo de página (recebe props)
│   ├── HomeView.astro
│   ├── InstitutionPage.astro
│   ├── InitiativesPage.astro
│   ├── InitiativePage.astro
│   ├── EventsPage.astro
│   ├── KnowledgePage.astro
│   ├── DonationsPage.astro
│   ├── CitiesDayPage.astro
│   ├── FaqPage.astro
│   ├── ContactPage.astro
│   ├── AffiliationPage.astro
│   ├── LegalPage.astro
│   └── NotFoundPage.astro
├── components/              # Componentes reutilizáveis e pequenos
│   ├── Header.astro · Footer.astro · LanguageSwitcher.astro
│   ├── CastleEntrance.astro · CastleDoor.astro
│   ├── InstitutionalSection.astro · MissionCard.astro
│   ├── InitiativeCard.astro · EventCard.astro · ArticleCard.astro
│   ├── ContactForm.astro · Timeline.astro · Quote.astro
│   ├── SEO.astro · PageHero.astro
│   └── ui/  (Section, SectionHeading, CTA, Breadcrumbs, AccordionItem,
│             CastleArch, Emblem, Icon)
├── content/                 # Dados de conteúdo tipados
│   ├── institution.ts · initiatives.ts · events.ts
│   ├── knowledge.ts · faq.ts · doors.ts
│   └── localize.ts          # Tipo Localized<T> + helper tx()
├── config/
│   ├── site.ts              # Contatos, links, redes sociais, endpoint de form
│   └── navigation.ts        # Menu principal, secundário e colunas do footer
├── i18n/
│   ├── config.ts            # Locales, nomes nativos, tags BCP-47
│   ├── routes.ts            # Slugs por locale + resolvedor reverso
│   ├── dictionaries.ts      # deepMerge + fallback para pt
│   └── dictionaries/        # pt.ts (fonte) · en · it · fr · es
├── styles/
│   └── global.css           # Design system (tokens + utilitários)
└── utils/
    └── date.ts              # Formatação de datas por locale
```

### Como as páginas são geradas

`src/routes.ts` é o **mapa único** do site. Ele liga cada `RouteKey` a uma
`view` e a props específicas:

```ts
// src/routes.ts (trecho)
export const routeDefinitions: RouteDefinition[] = [
  { routeKey: 'home', view: 'home' },
  { routeKey: 'order', view: 'institution', meta: { institution: 'about' } },
  { routeKey: 'history', view: 'institution', meta: { institution: 'history' } },
  { routeKey: 'initiativeEducation', view: 'initiative', meta: { initiativeId: 'education' } },
  // ...
];
```

`src/pages/[...slug].astro` percorre esse mapa **para cada locale** e gera todas
as rotas estáticas. Adicionar uma página normalmente é:

1. adicionar a `RouteKey` em `src/i18n/routes.ts` (com os slugs por locale);
2. adicionar a definição em `src/routes.ts` apontando para uma `view`.

O build atual gera **116 páginas HTML estáticas**.

### URLs amigáveis

Português é servido na raiz; os demais idiomas recebem prefixo:

```text
/                          /en/                /it/     /fr/     /es/
/ordem                     /en/order
/historia                  /en/history
/propositos                /en/purposes
/ensinamentos              /en/teachings
/iniciativas               /en/initiatives
/iniciativas/meio-ambiente /en/initiatives/environment
/iniciativas/esporte       /en/initiatives/sport
/iniciativas/saude         /en/initiatives/health
/iniciativas/educacao      /en/initiatives/education
/eventos                   /en/events
/conhecimento              /en/knowledge
/palestras · /estudos · /artigos
/dia-das-cidades           /en/cities-day
/doacoes                   /en/donations
/afiliacao                 /en/affiliation
/faq · /contato
/politica-de-privacidade · /termos · /cookies
```

---

## 4. Internacionalização (i18n)

Cinco locales: **pt (fonte de verdade), en, it, fr, es**.

- **Slugs traduzidos por locale** — `src/i18n/routes.ts` define o segmento de
  cada rota em cada idioma, com resolução reversa (`matchRouteKey`) para que o
  seletor de idioma aponte para a **mesma página** no idioma escolhido.
- **Dicionário com fallback** — `src/i18n/dictionaries.ts` faz `deepMerge` das
  traduções sobre o `pt.ts`. Chaves ausentes caem para o português, então um
  idioma parcialmente traduzido nunca renderiza string vazia.
- **Conteúdo localizado** — os módulos em `src/content/` usam o tipo
  `Localized<T>` e o helper `tx(value, locale)`:

```ts
// src/content/localize.ts
export type Localized<T> = { pt: T } & Partial<Record<Exclude<Locale, 'pt'>, T>>;
export function tx<T>(value: Localized<T>, locale: Locale): T {
  return (value as Partial<Record<Locale, T>>)[locale] ?? value.pt;
}
```

- **Seletor acessível** — `LanguageSwitcher.astro` usa apenas links de texto
  (`PT | EN | IT | FR | ES`), sem depender de bandeiras, com `aria-label`
  descrevendo o idioma de destino.
- **SEO multilíngue** — cada página gera `hreflang` para todos os idiomas +
  `x-default`, `canonical` e `<html lang>` corretos.

**Adicionar um novo idioma** (ex.: `de`):

1. `src/i18n/config.ts` → adicionar a locale em `locales`, `localeNames`,
   `localeShort`, `localeTags`.
2. `src/i18n/routes.ts` → adicionar o segmento de URL de cada `RouteKey`.
3. `src/i18n/dictionaries/de.ts` → criar as traduções (parcial é aceitável).
4. `src/i18n/dictionaries.ts` → registrar em `overrides`.
5. `astro.config.mjs` → incluir em `i18n.locales` e no `sitemap`.

---

## 5. Conteúdo e como editar

Todo o conteúdo institucional está em módulos TypeScript tipados, **sem textos
inventados** e sem hardcode dentro de componentes traduzíveis.

| Arquivo                          | O que contém                                            |
| -------------------------------- | ------------------------------------------------------- |
| `src/config/site.ts`             | Nome, e-mail, telefone, endereço, redes, links externos |
| `src/content/institution.ts`     | Quem Somos, História, Propósitos, Ensinamentos          |
| `src/content/initiatives.ts`     | Meio Ambiente, Esporte, Saúde, Educação                 |
| `src/content/events.ts`          | Agenda de eventos                                       |
| `src/content/knowledge.ts`       | Palestras, estudos e artigos                            |
| `src/content/faq.ts`             | FAQ por categorias                                      |
| `src/content/doors.ts`           | As 6 "Portas do Castelo" da homepage                    |

### Editar um contato ou link

Todos os dados de contato e links externos ficam em `src/config/site.ts`:

```ts
// src/config/site.ts (trecho — só dados confirmados são publicados; ver AUDIT.md)
export const site = {
  name: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
  shortName: 'OICMCTB',
  email: 'oicmctb@gmail.com',
  phone: null, // não confirmado — oculto
  eventsPlatformUrl: '', // não confirmado — oculto
  formEndpoint: '',        // vazio → ContactForm usa mailto: pré-preenchido
  social: [],              // apenas redes sociais OFICIAIS da Ordem
} as const;
```

> **Dados não confirmados:** telefone, endereço e links externos ficam
> ocultos (`null`/vazio em `src/config/site.ts`) até confirmação oficial —
> ver pendências em `AUDIT.md`. E-mail publicado: `oicmctb@gmail.com`.
>
> **Regra editorial:** não inventar fatos históricos, datas, regras tributárias
> ou redes sociais. Conteúdo de IRPF deve vir de fonte jurídica/contábil oficial
> fornecida pela Ordem.

### Reconectar a marca

- Domínio de produção → `astro.config.mjs` (constante `SITE`) e
  `public/robots.txt` (linha `Sitemap:`).
- Imagem de compartilhamento (Open Graph) → `public/og-default.png`
  (regerar com `python3 scripts/generate_og.py`).
- Favicon/emblema → `public/favicon.svg`, `public/emblema.svg`.

---

## 6. Design system

Tudo em `src/styles/global.css`, em três camadas:

1. **Tokens** (`@theme`) — fontes (`--font-display`, `--font-sans`), cores
   (`--color-ink-*`, `--color-gold-*`, `--color-wine-*`, `--color-parchment`)
   e sombras (`plate`/`lift`).
2. **Componentes utilitários** — `.frame-engraved`, `.surface-dark`,
   `.prose-templar`, `.btn-*`, textura de pedra gravada.
3. **Base** — reset, foco visível, tipografia fluida.

Princípios:

- **Serifada** (Cinzel / Cormorant) para títulos, **sans** (Inter) para interface.
- Ouro envelhecido e vermelho vinho como **acentos**, nunca como base.
- Ornamentos (arcos, escudos, divisores) com **moderação** — o site deve
  continuar contemporâneo, sem estética de videogame/RPG.
- Todos os elementos gráficos são **SVG inline** (`ui/CastleArch`, `ui/Emblem`,
  `ui/Icon`) — sem imagens pesadas.

---

## 7. SEO, acessibilidade e performance

### SEO

- `SEO.astro` gera por página: `title`, `meta description`, `canonical`,
  Open Graph, Twitter/X Card, `hreflang` + `x-default`.
- **JSON-LD Schema.org**: `Organization`, `WebSite`, `FAQPage` (+ `Event`
  quando aplicável).
- `sitemap-index.xml` + `sitemap-0.xml` gerados no build; `robots.txt` em
  `public/`.
- URLs amigáveis e traduzidas por idioma.

### Acessibilidade

- HTML semântico e hierarquia de headings consistente.
- Skip-link ("Ir para o conteúdo principal"), navegação por teclado e foco
  visível.
- `aria-label` em controles icônicos; `alt` em todas as imagens.
- Seletor de idioma sem dependência de bandeiras ou de hover.
- Contraste adequado; o conceito medieval nunca prejudica a legibilidade.

### Performance

- **SSG puro**: HTML estático, CSS crítico inline (`inlineStylesheets: 'auto'`),
  JavaScript quase nulo (apenas o drawer mobile e o accordion do FAQ).
- Fontes self-hosted com `font-display: swap`; imagens com `loading="lazy"`
  abaixo da dobra.
- Sem sliders, carrosséis automáticos, vídeos em autoplay, WebGL ou partículas.
- Meta de referência: **Lighthouse Performance 90+** e ótimos Core Web Vitals.

---

## 8. Deploy

O projeto é **estático** — qualquer host/CDN serve `dist/`. Fluxo desejado:

```text
git push  →  build (npm run build)  →  deploy de dist/
```

| Plataforma           | Configuração                                                        |
| -------------------- | ------------------------------------------------------------------- |
| **Cloudflare Pages** | Build: `npm run build` · Output: `dist` · Node 20 · usa `public/_headers` |
| **Vercel**           | Detectado via `vercel.json` (framework Astro, output `dist`)          |
| **Netlify**          | Detectado via `netlify.toml` (build `npm run build`, publish `dist`)  |
| **Servidor estático**| Enviar o conteúdo de `dist/` (Nginx, S3+CloudFront, etc.)           |

Já incluímos a configuração pronta no repositório:

- `netlify.toml` — build, publish e cabeçalhos de cache/segurança.
- `vercel.json` — build, output e cabeçalhos.
- `public/_headers` — cache/segurança para Cloudflare Pages e Netlify.
- `.nvmrc` — fixa o Node 20.

Recomendações de infra:

- **CDN** com cache longo para `/assets` versionados (`_astro/*`) e cache curto
  para o HTML.
- **Compressão** Brotli/Gzip habilitada no host/CDN.
- **HTTPS** obrigatório (todos os hosts acima oferecem automaticamente).

Não há necessidade de Docker, banco de dados, Redis, workers, filas ou Node
server persistente.

---

## 9. Conectar formulários e CMS

### Formulários (contato / Dia das Cidades / afiliação)

`ContactForm.astro` funciona em dois modos:

- **Sem backend** (`site.formEndpoint = ''`): monta automaticamente um
  `mailto:` pré-preenchido — o visitante envia pelo próprio cliente de e-mail.
- **Com backend**: defina `formEndpoint` em `src/config/site.ts` (ex.:
  Formspree, ou um Cloudflare Worker/Functions). O formulário passa a fazer
  `POST` para esse endpoint.

```ts
// src/config/site.ts
formEndpoint: 'https://formspree.io/f/SEU_ID',
```

### CMS (futuro)

A primeira versão usa arquivos de conteúdo (`src/content/*.ts`). Como os dados
já são módulos isolados e tipados, é simples migrar depois para:

- **Astro Content Collections** (Markdown/MDX) — trocar os módulos por
  `getCollection()`.
- **CMS headless** (Sanity, Contentful, Decap, Directus) — substituir a leitura
  dos módulos por chamadas ao CMS no build (mantendo SSG).

Nenhuma alteração de componente é necessária: as views consomem os dados
tipados, e `tx()` já resolve a localização.

---

## 10. Convenções de código

- **Componentes pequenos e previsíveis**; evitar arquivos com centenas de linhas.
- **Texto traduzível nunca hardcoded** em componentes — usar os dicionários.
- **Conteúdo institucional** apenas em `src/content/*` e `src/config/*`.
- Aliases de import via `@/` (ex.: `@/components/...`).
- Rodar `npm run check` antes de commitar; manter **0 erros, 0 warnings**.
- Não introduzir animações complexas, parallax, vídeo em autoplay ou WebGL sem
  decisão explícita — este é um site **estático rápido e institucional**.

---

© Ordem dos Cavaleiros Templários. Conteúdo institucional sujeito à revisão da Ordem.