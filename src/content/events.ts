import type { Localized } from './localize';

export interface EventItem {
  id: string;
  title: Localized<string>;
  summary: Localized<string>;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  endDate?: string;
  location: Localized<string>;
  /** Optional link to the event on the external platform. */
  url?: string;
  image?: string;
  /**
   * Sample content flag. The Order should replace the entries below with the
   * real agenda (or connect a CMS). Entries flagged as placeholder are not
   * given specific venues that could be mistaken for confirmed facts.
   */
  placeholder?: boolean;
}

/**
 * The agenda. In the first version this is a plain data file; the events
 * platform (site.eventsPlatformUrl) remains the source of truth for booking.
 *
 * TODO(Order): replace with the real agenda or wire up a data source.
 */
export const events: EventItem[] = [
  {
    id: 'investidura',
    title: {
      pt: 'Cerimônia de Investidura',
      en: 'Investiture Ceremony',
    },
    summary: {
      pt: 'Cerimônia religiosa de concessão do título de Cavalaria, aberta àqueles que desejarem assistir.',
      en: 'Religious ceremony granting the title of Knighthood, open to those who wish to attend.',
    },
    date: '2026-11-14',
    location: { pt: 'Local a definir', en: 'Venue to be announced' },
    placeholder: true,
  },
  {
    id: 'encontro-estudos',
    title: {
      pt: 'Encontro de Estudos Templários',
      en: 'Templar Study Gathering',
    },
    summary: {
      pt: 'Encontro de estudo e partilha de conhecimento entre os membros da Ordem.',
      en: 'A gathering for study and the sharing of knowledge among members of the Order.',
    },
    date: '2026-12-05',
    location: { pt: 'Local a definir', en: 'Venue to be announced' },
    placeholder: true,
  },
  {
    id: 'dia-das-cidades',
    title: {
      pt: 'Dia das Cidades',
      en: 'Day of Cities',
    },
    summary: {
      pt: 'Programação aberta à comunidade, celebrando fraternidade, cultura e serviço.',
      en: 'A programme open to the community, celebrating fraternity, culture and service.',
    },
    date: '2027-03-21',
    location: { pt: 'A definir com a cidade anfitriã', en: 'To be defined with the host city' },
    placeholder: true,
  },
];