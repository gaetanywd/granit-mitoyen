// Liens de contact du groupe (email + réseaux).
// Les libellés sont en i18n (contact.email, contact.facebook, etc.).

export type ContactType = 'email' | 'facebook' | 'instagram' | 'youtube' | 'bandcamp';

export interface ContactLink {
  type: ContactType;
  url: string;
  /** Clé i18n pour le libellé affiché (ex. contact.email). */
  labelKey: 'contact.email' | 'contact.facebook' | 'contact.instagram' | 'contact.youtube' | 'contact.bandcamp';
  /** true = ouvrir en nouvel onglet (pas pour mailto). */
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  { type: 'email', url: 'mailto:granitmitoyen.band@gmail.com', labelKey: 'contact.email' },
  { type: 'facebook', url: 'https://www.facebook.com/granit.mitoyen', labelKey: 'contact.facebook', external: true },
  { type: 'instagram', url: 'https://www.instagram.com/granit.mitoyen/', labelKey: 'contact.instagram', external: true },
  { type: 'youtube', url: 'https://www.youtube.com/@GranitMitoyen', labelKey: 'contact.youtube', external: true },
  { type: 'bandcamp', url: 'https://granitmitoyen.bandcamp.com/', labelKey: 'contact.bandcamp', external: true },
];
