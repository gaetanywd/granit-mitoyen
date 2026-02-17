// Petit système de traductions centralisé pour le site.
// Objectif : garder le code simple et lisible, sans dépendance externe.

// Toutes les traductions sont regroupées ici pour éviter
// les chaînes de caractères en dur un peu partout.
export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.medias': 'Médias',
    'nav.shows': 'Concerts',

    // Layout / titre du site
    'layout.siteTitle': 'Granit Mitoyen',

    // Page d'accueil
    'home.title': 'Granit Mitoyen',
    'home.subtitle.line1': 'Black magic',
    'home.subtitle.line2': 'From the deep',

    // Page médias
    'medias.title': 'Médias',
    'medias.section.montfort': 'Concert Montfort',
    'medias.section.stPeran': 'Concert St Peran',

    // Page concerts / shows
    'shows.title': 'Concerts',
    'shows.date': 'Date',
    'shows.address': 'Lieu',
    'shows.linkFacebook': 'Facebook',
    'shows.linkInstagram': 'Instagram',
    'shows.linkWeb': 'Site',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.medias': 'Media',
    'nav.shows': 'Shows',

    // Layout / titre du site
    'layout.siteTitle': 'Granit Mitoyen',

    // Home page
    'home.title': 'Granit Mitoyen',
    'home.subtitle.line1': 'Black magic',
    'home.subtitle.line2': 'From the deep',

    // Media page
    'medias.title': 'Media',
    'medias.section.montfort': 'Montfort concert',
    'medias.section.stPeran': 'St Peran concert',

    // Shows page
    'shows.title': 'Shows',
    'shows.date': 'Date',
    'shows.address': 'Venue',
    'shows.linkFacebook': 'Facebook',
    'shows.linkInstagram': 'Instagram',
    'shows.linkWeb': 'Website',
  },
} as const;

// TypeScript déduit automatiquement les locales supportées
// à partir des clés de l'objet translations.
export type Locale = keyof typeof translations;

// Union de toutes les clés de traduction disponibles.
export type TranslationKey = keyof (typeof translations)[Locale];

/**
 * Fonction utilitaire simple pour lire une traduction.
 * - locale : langue demandée
 * - key : identifiant de la chaîne à traduire
 * Si rien n'est trouvé, on renvoie la clé pour faciliter le debug.
 */
export function t(locale: Locale, key: TranslationKey): string {
  const dict = translations[locale] ?? translations.fr;
  return dict[key] ?? key;
}

