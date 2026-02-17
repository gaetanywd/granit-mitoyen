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
    'nav.presentation': 'Présentation',

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

    // Page présentation
    'presentation.title': 'Présentation',
    'presentation.groupHeading': 'Présentation du groupe',
    'presentation.intro': "Groupe indépendant originaire de Rennes, Granit Mitoyen est né en 2022 avec un premier chanteur. C'est en mai 2024, que Yann, Vanessa et Gaétan trouvent la voix qui affirme le style musical du groupe : Yoann. Influencés par des groupes comme Kyuss, 1000mods, black sabbath mais encore d'autres genres musicaux, les compositions naviguent entre des riffs lourds, psychédéliques et metal pour faire naître un stoner original. Composé de 4 membres : Yoann au Chant, Yann à la Guitare, Vanessa à la Basse et Gaétan à la Batterie, le groupe vous transportera dans un univers fantasy au son granitique.",
    'presentation.role.vocals': 'Chant',
    'presentation.role.guitar': 'Guitare',
    'presentation.role.bass': 'Basse',
    'presentation.role.drums': 'Batterie',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.medias': 'Media',
    'nav.shows': 'Shows',
    'nav.presentation': 'About',

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

    // Presentation / about page
    'presentation.title': 'About',
    'presentation.groupHeading': 'About the band',
    'presentation.intro': "Independent band from Rennes, Granit Mitoyen was born in 2022 with a first singer. In May 2024, Yann, Vanessa and Gaétan found the voice that defines the band's sound: Yoann. Influenced by bands like Kyuss, 1000mods, Black Sabbath and other genres, their music blends heavy, psychedelic and metal riffs into an original stoner sound. With four members—Yoann on vocals, Yann on guitar, Vanessa on bass and Gaétan on drums—the band takes you into a fantasy world with a granitic sound.",
    'presentation.role.vocals': 'Vocals',
    'presentation.role.guitar': 'Guitar',
    'presentation.role.bass': 'Bass',
    'presentation.role.drums': 'Drums',
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

