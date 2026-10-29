/**
 * Global site configuration — single source of truth for links and contacts.
 * Only confirmed information is published. Unconfirmed fields stay `null` /
 * empty and are hidden by the components that would render them (see
 * AUDIT.md for the pending confirmations).
 */
export const site = {
  name: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
  shortName: 'OICMCTB',
  legalName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
  /** Institutional e-mail confirmed for publication. */
  email: 'oicmctb@gmail.com',
  /** Not confirmed for publication — hidden until validated. */
  phone: null as string | null,
  phoneHref: null as string | null,
  address: null as null | {
    street: string; district: string; city: string; region: string; postalCode: string; country: string;
  },
  /** No confirmed external events platform — hidden until validated. */
  eventsPlatformUrl: '',
  /** No confirmed form backend; the form falls back to a pre-filled mailto:. */
  formEndpoint: '',
  /** No confirmed shop — hidden until validated. */
  shopUrl: '',
  /**
   * Social profiles mentioned by representatives (@oicmctb on Facebook and
   * Instagram) are NOT listed until the URLs are verified as official.
   */
  social: [] as { label: string; url: string; icon: 'facebook' | 'instagram' | 'youtube' | 'x' }[],
} as const;

export const contactAddressLine: string | null = null;
