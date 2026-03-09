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

// URL du press kit : vient du .env (PUBLIC_PRESS_KIT_URL) pour être facilement modifiable.
const PRESS_KIT_URL = import.meta.env.PUBLIC_PRESS_KIT_URL as string | undefined;

// Liens de réseaux sociaux : viennent UNIQUEMENT du .env.
// Si une variable manque ou est invalide, le lien est totalement caché.
const FACEBOOK_URL = import.meta.env.FACEBOOK_URL as string | undefined;
const INSTAGRAM_URL = import.meta.env.INSTAGRAM_URL as string | undefined;
const YOUTUBE_URL = import.meta.env.YOUTUBE_URL as string | undefined;
const BANDCAMP_URL = import.meta.env.BANDCAMP_URL as string | undefined;

// On construit d'abord une liste "brute" qui peut contenir des entrées nulles,
// puis on filtre pour ne garder que les liens avec une URL HTTP valide.
const rawLinks: (ContactLink | null)[] = [
  FACEBOOK_URL && {
    type: 'facebook',
    url: FACEBOOK_URL,
    labelKey: 'contact.facebook',
    iconClass: 'fa-brands fa-facebook-f',
    external: true,
  },
  INSTAGRAM_URL && {
    type: 'instagram',
    url: INSTAGRAM_URL,
    labelKey: 'contact.instagram',
    iconClass: 'fa-brands fa-instagram',
    external: true,
  },
  YOUTUBE_URL && {
    type: 'youtube',
    url: YOUTUBE_URL,
    labelKey: 'contact.youtube',
    iconClass: 'fa-brands fa-youtube',
    external: true,
  },
  BANDCAMP_URL && {
    type: 'bandcamp',
    url: BANDCAMP_URL,
    labelKey: 'contact.bandcamp',
    iconClass: 'fa-brands fa-bandcamp',
    external: true,
  },
];

const baseLinks: ContactLink[] = rawLinks.filter(
  (link): link is ContactLink => Boolean(link && link.url && link.url.startsWith('http')),
);

export const contactLinks: ContactLink[] = baseLinks;

/** Adresse email de contact affichée sur la page Contact. */
export const CONTACT_EMAIL = 'granitmitoyen.band@gmail.com';

export { PRESS_KIT_URL };
