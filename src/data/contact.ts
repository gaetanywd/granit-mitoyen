// Liens de contact du groupe (réseaux). L'email est géré par le formulaire Formspree + fallback.
// Les libellés sont en i18n (contact.facebook, etc.).

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

/** Email affiché uniquement en fallback si le formulaire Formspree échoue. */
export const FALLBACK_EMAIL = 'granitmitoyen.band@gmail.com';
