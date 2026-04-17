// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // URL publique du site.
    // Astro l'utilise aussi pour les URLs absolues lors du build.
    site: process.env.PUBLIC_SITE_URL ?? 'https://granitmitoyen.com',
    trailingSlash: 'always',
    // Configuration principale du bundler Vite (CSS, JS, etc.)
    vite: {
        // @ts-ignore - le typage officiel Tailwind 4 pour Vite évolue encore
        plugins: [tailwindcss()]
    },
    // Configuration i18n native d'Astro (v5.14.5)
    // - locales: toutes les langues supportées
    // - defaultLocale: langue par défaut (ici le français)
    // - routing.prefixDefaultLocale: garde les URLs sans préfixe pour la langue par défaut
    //   et ajoute un préfixe /en/... uniquement pour l'anglais.
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
        routing: {
            prefixDefaultLocale: false,
        },
    },
});