/**
 * Global site configuration — single source of truth for links, contacts
 * and social profiles. Update these values; components read from here.
 *
 * NOTE: the values below are PLACEHOLDERS. Replace them with the Order's
 * official contact details before going live.
 */

export const site = {
  name: 'Ordem dos Cavaleiros Templários',
  shortName: 'OSMTH Brasil',
  legalName: 'Ordem dos Cavaleiros Templários',
  email: 'contato@exemplo.org',
  phone: '(00) 0000-0000',
  phoneHref: 'tel:+550000000000',
  address: {
    street: 'Rua Exemplo, 000 – Sala 000',
    district: 'Bairro',
    city: 'Cidade',
    region: 'UF',
    postalCode: '00000-000',
    country: 'BR',
  },
  /** External platform for the events agenda (provided by the Order). */
  eventsPlatformUrl: 'https://exemplo.org/eventos',
  /**
   * Form submission endpoint (e.g. Formspree, a Cloudflare Worker, or the
   * Order's own handler). Leave empty to fall back to a pre-filled mailto:.
   */
  formEndpoint: '',
  /** Official shop, if maintained externally. */
  shopUrl: 'https://exemplo.org/loja',
  /** Only official social profiles of the Order should be listed here. */
  social: [] as { label: string; url: string; icon: 'facebook' | 'instagram' | 'youtube' | 'x' }[],
} as const;

export const contactAddressLine =
  'Rua Exemplo, 000 – Sala 000 — Bairro, Cidade – UF — CEP 00000-000';