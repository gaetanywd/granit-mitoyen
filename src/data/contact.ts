// Liens de contact du groupe : email + réseaux. Les libellés sont en i18n (contact.email, contact.facebook, etc.).

export type ContactType = 'facebook' | 'instagram' | 'youtube' | 'bandcamp';

export interface ContactLink {
  type: ContactType;
  url: string;
  labelKey: 'contact.facebook' | 'contact.instagram' | 'contact.youtube' | 'contact.bandcamp';
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  { type: 'facebook', url: 'https://www.facebook.com/granit.mitoyen', labelKey: 'contact.facebook', external: true },
  { type: 'instagram', url: 'https://www.instagram.com/granit.mitoyen/', labelKey: 'contact.instagram', external: true },
  { type: 'youtube', url: 'https://www.youtube.com/@GranitMitoyen', labelKey: 'contact.youtube', external: true },
  { type: 'bandcamp', url: 'https://granitmitoyen.bandcamp.com/', labelKey: 'contact.bandcamp', external: true },
];

/** Adresse email de contact affichée sur la page Contact. */
export const CONTACT_EMAIL = 'granitmitoyen.band@gmail.com';
