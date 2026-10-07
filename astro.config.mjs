// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change this to the final production domain before deploy.
const SITE = 'https://www.templarios.org.br';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'it', 'fr', 'es'],
    routing: {
      // Portuguese (default) is served at the root, other locales are prefixed.
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-BR',
          en: 'en',
          it: 'it',
          fr: 'fr',
          es: 'es',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});