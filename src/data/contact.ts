// Liens de contact du groupe : email + réseaux. Les libellés sont en i18n (contact.email, contact.facebook, etc.).

export type ContactType = 'facebook' | 'instagram' | 'youtube' | 'bandcamp';

export interface ContactLink {
  type: ContactType;
  url: string;
  labelKey:
    | 'contact.facebook'
    | 'contact.instagram'
    | 'contact.youtube'
    | 'contact.bandcamp';
  iconClass?: string;
  external?: boolean;
}

const PRESS_KIT_URL = import.meta.env.PUBLIC_PRESS_KIT_URL as string | undefined;

const baseLinks: ContactLink[] = [
  {
    type: 'facebook',
    url: 'https://www.facebook.com/granit.mitoyen',
    labelKey: 'contact.facebook',
    iconClass: 'fa-brands fa-facebook-f',
    external: true,
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/granit.mitoyen/',
    labelKey: 'contact.instagram',
    iconClass: 'fa-brands fa-instagram',
    external: true,
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/@GranitMitoyen',
    labelKey: 'contact.youtube',
    iconClass: 'fa-brands fa-youtube',
    external: true,
  },
  {
    type: 'bandcamp',
    url: 'https://granitmitoyen.bandcamp.com/',
    labelKey: 'contact.bandcamp',
    iconClass: 'fa-brands fa-bandcamp',
    external: true,
  },
];

export const contactLinks: ContactLink[] = baseLinks;

/** Adresse email de contact affichée sur la page Contact. */
export const CONTACT_EMAIL = 'granitmitoyen.band@gmail.com';

export { PRESS_KIT_URL };
