// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change this to the final production domain before deploy.
const SITE = 'https://www.exemplo.org';

// Set by docker-compose so the dev server is reachable through the published port.
const port = Number(process.env.PORT || 6000);
const listenOnAllInterfaces = process.env.HOST === '0.0.0.0';
const publishedPort = process.env.KOOL_APP_PORT
  ? Number(process.env.KOOL_APP_PORT)
  : undefined;

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    // Vite blocks unknown Host headers. A leading dot also allows subdomains.
    allowedHosts: ['.templariosdobrasil.com'],
    ...(listenOnAllInterfaces
      ? {
          host: true,
          port,
        }
      : {}),
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
    ...(publishedPort && publishedPort !== port
      ? {
          server: {
            ws: { clientPort: publishedPort },
          },
        }
      : {}),
  },
});