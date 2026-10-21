/**
 * Global site configuration — single source of truth for links, contacts
 * and social profiles. Components read from here.
 *
 * Editorial note (per institutional guidelines):
 * - The e-mail and social profiles below are taken from the material provided
 *   by the Order. They are NOT rendered as clickable links until the Order
 *   confirms they are active and correct (see src/config/README note below).
 * - No physical address, telephone or additional legal data is published,
 *   as none has been confirmed by the Order.
 */

export const site = {
  /** Full institutional name, used on first mention and in metadata. */
  name: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
  /** Short institutional name used in headers/footers. */
  shortName: 'OICMCTB',
  /** Legal name (razão social), as provided by the Order. */
  legalName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
  /** CNPJ as provided by the Order — pending external validation. */
  cnpj: '42.071.770/0001-75',
  /** Grand Master, as identified in the institutional material. */
  grandMaster: 'Roberto Aguiar Guazzelli',
  /** First Lady of the National Council of Templar Ladies, as identified. */
  firstLady: 'Sueli Teodoro',
  /** Cultural and literary arm associated with the Order. */
  culturalArm: 'Academia Brasileira Templária de Letras (ABTL)',
  /** Institutional e-mail provided by the Order. Not clickable until validated. */
  email: 'oicmctb@gmail.com',
  /** Official social handles, as provided by the Order. Not linked until validated. */
  socialHandle: '@oicmctb',
  /** Official social platforms, as provided by the Order. */
  socialPlatforms: ['Facebook', 'Instagram'],
  /** Lema oficial da Ordem. */
  motto: 'CREARE FUTURUM MUTATO MODO',
  /** Portuguese translation of the motto. */
  mottoTranslation: 'Para criar o futuro de um modo diferente.',
  /**
   * Form submission endpoint. Left empty so ContactForm falls back to
   * a pre-filled mailto: (the e-mail is shown but not as a clickable link
   * until validated by the Order).
   */
  formEndpoint: '',
  /** Only official social profiles of the Order should be listed here. */
  social: [] as { label: string; url: string; icon: 'facebook' | 'instagram' | 'youtube' | 'x' }[],
} as const;

export const contactAddressLine = undefined;
