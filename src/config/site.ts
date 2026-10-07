/**
 * Global site configuration — single source of truth for links, contacts
 * and social profiles. Update these values; components read from here.
 */

export const site = {
  name: 'Ordem dos Cavaleiros Templários',
  shortName: 'OSMTH Brasil',
  legalName: 'Ordem dos Cavaleiros Templários',
  email: 'cavaleiros.templarios@templarios.org.br',
  phone: '(19) 2511-0047',
  phoneHref: 'tel:+551925110047',
  address: {
    street: 'Rua Ferreira Penteado, 709 – Sala 121',
    district: 'Centro',
    city: 'Campinas',
    region: 'SP',
    postalCode: '13010-041',
    country: 'BR',
  },
  /** External platform for the events agenda (provided by the Order). */
  eventsPlatformUrl: 'https://www.templarios.org.br/',
  /**
   * Form submission endpoint (e.g. Formspree, a Cloudflare Worker, or the
   * Order's own handler). Leave empty to fall back to a pre-filled mailto:.
   */
  formEndpoint: '',
  /** Official shop, if maintained externally. */
  shopUrl: 'https://www.templarios.org.br/',
  /** Only official social profiles of the Order should be listed here. */
  social: [] as { label: string; url: string; icon: 'facebook' | 'instagram' | 'youtube' | 'x' }[],
} as const;

export const contactAddressLine =
  'Rua Ferreira Penteado, 709 – Sala 121 — Centro, Campinas – SP — CEP 13010-041';