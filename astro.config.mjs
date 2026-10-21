// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import redirects from './redirects.generated.mjs';

// Change this to the final production domain before deploy.
const SITE = 'https://templariosdobrasil.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  // Permanent redirects from the previous architecture. The same list also
  // generates host-level 301 rules (public/_redirects and vercel.json).
  redirects,
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