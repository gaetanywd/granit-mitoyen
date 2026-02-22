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
    'nav.killbirgahn': 'Killbirgahn',
    'nav.contact': 'Contact',

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

    // Page Killbirgahn (lore)
    'killbirgahn.title': 'Killbirgahn',
    'killbirgahn.intro':
      "Killbirgahn est un monde de dark fantasy où dieux et forces plus anciennes se jouent des mortels. L'album « Lands Of Killbirgahn » raconte une tragédie sans héros : peur, erreur et équilibre.",
    'killbirgahn.tease.asel':
      "Sur la glace, une femme entend des voix qui ne viennent ni du vent ni des vivants. Asel ne sait pas encore qu'elle sera au centre d'un conflit qui dépasse les dieux eux-mêmes.",
    'killbirgahn.tease.samael':
      "Dans une cité blanche, un jeune apprenti mage est laissé seul face à une menace qu'il n'aurait jamais dû affronter. La peur et l'urgence le poussent vers un choix dont on ne revient pas.",
    'killbirgahn.tease.scroll':
      "Un parchemin scellé, oublié au fond d'une bibliothèque interdite. Un sort de pluie de feu qui ne devait jamais quitter le papier. Certaines erreurs ne brûlent pas qu'une seule ville.",
    'killbirgahn.coverAlt': 'Lands Of Killbirgahn – pochette de l’album',
    // Page contact
    'contact.title': 'Contact',
    'contact.email': 'E-mail',
    'contact.facebook': 'Facebook',
    'contact.instagram': 'Instagram',
    'contact.youtube': 'YouTube',
    'contact.bandcamp': 'Bandcamp',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.medias': 'Media',
    'nav.shows': 'Shows',
    'nav.presentation': 'About',
    'nav.killbirgahn': 'Killbirgahn',
    'nav.contact': 'Contact',

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

    // Killbirgahn lore page
    'killbirgahn.title': 'Killbirgahn',
    'killbirgahn.intro':
      "Killbirgahn is a dark fantasy world where gods and older forces play with mortal lives. The album “Lands Of Killbirgahn” unfolds like a tragedy without heroes: fear, mistakes, and a fragile balance.",
    'killbirgahn.tease.asel':
      'Out on the ice, a woman hears voices that belong neither to the wind nor to the living. Asel has no idea yet that she will stand at the center of a conflict that even the gods cannot control.',
    'killbirgahn.tease.samael':
      'In a white city, a young apprentice mage is left alone to face a threat he was never meant to confront. Fear and urgency drive him toward a decision he cannot undo.',
    'killbirgahn.tease.scroll':
      'A sealed scroll, buried in a forbidden library. A rain-of-fire spell that was never meant to leave the page. Some mistakes burn far more than a single kingdom.',
    'killbirgahn.coverAlt': 'Lands Of Killbirgahn – album cover',

    // Contact page
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.facebook': 'Facebook',
    'contact.instagram': 'Instagram',
    'contact.youtube': 'YouTube',
    'contact.bandcamp': 'Bandcamp',
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

