/**
 * Global site configuration — single source of truth for links, contacts
 * and social profiles. Components read from here.
 *
 * All institutional data below was provided by the Order. Registration data
 * (CNPJ) is displayed with an explicit note that it does not replace an
 * official registry certificate. No address or telephone is published,
 * because none has been confirmed by the institution.
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
  /** Institutional e-mail provided by the Order. */
  email: 'oicmctb@gmail.com',
  /** Official social handle, as provided by the Order. */
  socialHandle: '@oicmctb',
  /** Official social platforms, as provided by the Order. */
  socialPlatforms: ['Facebook', 'Instagram'],
  /** Lema oficial da Ordem. */
  motto: 'CREARE FUTURUM MUTATO MODO',
  /** Portuguese translation of the motto. */
  mottoTranslation: 'Para criar o futuro de um modo diferente.',
  /**
   * Form submission endpoint. Left empty so ContactForm falls back to a
   * pre-filled mailto: — the site works with zero backend infrastructure.
   */
  formEndpoint: '',
  /** Only official social profiles of the Order should be listed here. */
  social: [] as { label: string; url: string; icon: 'facebook' | 'instagram' | 'youtube' | 'x' }[],
} as const;
