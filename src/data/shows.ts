// Données centralisées des concerts / shows.
// Utilisées par la page Shows (FR et EN) ; les libellés (Date, Adresse, etc.) sont en i18n.

export interface ShowLinks {
  facebook?: string;
  instagram?: string;
  web?: string;
}

export interface Show {
  /** Libellé d’affichage de la date (ex. "5 octobre 2025"). */
  dateLabel: string;
  /** Date ISO (YYYY-MM-DD) pour SEO et données structurées. */
  dateIso: string;
  /** Lieu + ville (ex. "La Fontaine de St-Péran", "Jardin Modern, Rennes"). */
  address: string;
  /** Liens optionnels vers événement / page. */
  links: ShowLinks;
  /** Lien principal mis en avant (billetterie, réservation, etc.). */
  mainLink?: string;
  /** Libellé du lien principal (ex. "Billetterie", "Réserver"). */
  mainLinkLabel?: string;
}

// Liste des concerts passés, du plus récent au plus ancien.
export const shows: Show[] = [
  {
    dateLabel: '13 juin 2026',
    dateIso: '2026-06-13',
    address: 'Open Air Heaven\'s Colt - Pipriac (35)',
    links: {
      instagram: 'https://www.instagram.com/p/DVtvaCLjZEc/',
    },
  },
  {
    dateLabel: '2 mai 2026',
    dateIso: '2026-05-02',
    address: 'Bar La Fontaine - St Péran (35)',
    links: {
      facebook: 'https://www.facebook.com/events/1312210754156368/',
    },
  },
  {
    dateLabel: '9 avril 2026',
    dateIso: '2026-04-09',
    address: 'Jardin Moderne, Rennes',
    links: {
      facebook: 'https://www.facebook.com/events/le-jardin-moderne/release-party-granit-mitoyen-witchorious-glam-dicinn/922266450327866/',
    },
    mainLink:
      'https://www.helloasso.com/associations/granit-citoyen/evenements/granit-mitoyen-release-party-glam-dicinn-witchorious',
    mainLinkLabel: 'Billetterie HelloAsso',
  },
  {
    dateLabel: '29 novembre 2025',
    dateIso: '2025-11-29',
    address: 'Amrok - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '22 novembre 2025',
    dateIso: '2025-11-22',
    address: 'Pipriac Metal Fest - Pipriac (35)',
    links: {},
  },
  {
    dateLabel: '5 octobre 2025',
    dateIso: '2025-10-05',
    address: 'La Fontaine de St-Péran',
    links: {
      facebook: 'https://www.facebook.com/events/970912191460728',
    },
  },
  {
    dateLabel: '29 mars 2025',
    dateIso: '2025-03-29',
    address: 'Synthi - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '22 mars 2025',
    dateIso: '2025-03-22',
    address: 'Marquis de Sade - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '5 octobre 2024',
    dateIso: '2024-10-05',
    address: 'La Fontaine - St-Péran (35)',
    links: {},
  },
  {
    dateLabel: '21 juin 2024',
    dateIso: '2024-06-21',
    address: 'Fête de la musique - Montfort/Meu (35)',
    links: {},
  },
  {
    dateLabel: '13 janvier 2024',
    dateIso: '2024-01-13',
    address: 'La Fontaine - St-Péran (35)',
    links: {},
  },
  {
    dateLabel: '5 novembre 2023',
    dateIso: '2023-11-05',
    address: 'Le Sous-Bock - La Mézière (35)',
    links: {},
  },
  {
    dateLabel: '30 septembre 2023',
    dateIso: '2023-09-30',
    address: 'Marquis de Sade - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '13 juillet 2023',
    dateIso: '2023-07-13',
    address: 'Le Sous-Bock - La Mézière (35)',
    links: {},
  },
  {
    dateLabel: '21 juin 2023',
    dateIso: '2023-06-21',
    address: 'Melody Maker - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '16 juin 2023',
    dateIso: '2023-06-16',
    address: 'Melody Maker - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '3 juin 2023',
    dateIso: '2023-06-03',
    address: 'Melody Maker - Rennes (35)',
    links: {},
  },
  {
    dateLabel: '17 février 2023',
    dateIso: '2023-02-17',
    address: 'Le Gazoline - Rennes (35)',
    links: {},
  },
];
