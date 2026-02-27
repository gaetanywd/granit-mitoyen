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
    dateLabel: '5 octobre 2025',
    dateIso: '2025-10-05',
    address: 'La Fontaine de St-Péran',
    links: {
      facebook: 'https://www.facebook.com/events/970912191460728',
    },
  },
  {
    dateLabel: '9 avril 2026',
    dateIso: '2026-04-09',
    address: 'Jardin Moderne, Rennes',
    links: {},
    mainLink: 'https://www.helloasso.com/associations/granit-citoyen/evenements/granit-mitoyen-release-party-glam-dicinn-witchorious',
    mainLinkLabel: 'Billetterie HelloAsso',
  },
];
