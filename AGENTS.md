# Granit Mitoyen - Site Web

## 📋 Description du projet

Site vitrine du groupe de metal Stoner Granit Mitoyen. Site statique multilingue (FR/EN) présentant le groupe, ses membres, concerts, médias et l'album "Kill Birgahn".

**⚠️ IMPORTANT**: Site vitrine = SEO doit être au top, comme si un expert SEO avait travaillé dessus (meta tags, structured data, performance, accessibilité, etc.)

## 🛠️ Stack technique

- **Framework**: Astro 5.14.5
- **Styling**: Tailwind CSS 4.1.16
- **Langages**: TypeScript, Astro components
- **Build**: Vite
- **Déploiement**: Static site generation (SSG)
- **Hosting**: Cloudflare Pages
- **CI/CD**: Déploiement automatique via GitHub (push sur `master` = déploiement en production)

## 📁 Architecture

```
/
├── public/              # Assets statiques (images, fonts, etc.)
├── src/
│   ├── components/      # Composants Astro réutilisables
│   │   ├── Navigation.astro
│   │   ├── ShowCard.astro
│   │   ├── MemberBlock.astro
│   │   └── ImageCard.astro
│   ├── data/           # Données structurées (TypeScript)
│   │   ├── contact.ts
│   │   ├── members.ts
│   │   └── shows.ts
│   ├── i18n/           # Internationalisation
│   │   └── dict.ts
│   ├── layouts/        # Layouts de page
│   │   └── Layout.astro
│   ├── pages/          # Pages du site (routing automatique)
│   │   ├── index.astro
│   │   ├── presentation.astro
│   │   ├── killbirgahn.astro
│   │   ├── shows.astro
│   │   ├── medias.astro
│   │   ├── contact.astro
│   │   └── en/         # Version anglaise
│   └── styles/
│       └── global.css
└── package.json
```

## 🌍 Internationalisation

- **Langues**: Français (défaut) + Anglais
- **Structure**: Pages FR à la racine, pages EN dans `/en/`
- **Dictionnaire**: `src/i18n/dict.ts` contient les traductions
- **Pattern**: Chaque page existe en 2 versions (ex: `index.astro` et `en/index.astro`)

## 🎵 Concept de l'album "Kill Birgahn"

L'album raconte une histoire de dark fantasy apocalyptique en 7 morceaux :
1. **Asel** - L'appel et la folie
2. **20 Days of Night** - La marche dans la glace
3. **The Journey** - La résurrection et la mission infernale
4. **Samael** - La peur et l'erreur
5. **Fire Rain** - L'apocalypse déclenchée
6. **Psychedelic Dream** - Le chaos mental et mystique
7. **Heavy Wolf** - L'éveil de l'arbitre ancien

Voir `ChatGPT.txt` pour l'histoire complète.

## 🧞 Commandes

```bash
npm install              # Installer les dépendances
npm run dev             # Dev server sur localhost:4321
npm run build           # Build production vers ./dist/
npm run preview         # Preview du build
```

## 📝 Conventions de code

- **Composants**: PascalCase (ex: `ShowCard.astro`)
- **Pages**: lowercase (ex: `killbirgahn.astro`)
- **Data files**: camelCase (ex: `members.ts`)
- **Styling**: Utiliser Tailwind CSS classes
- **Types**: TypeScript pour les données structurées

## ⚠️ Notes importantes

- **NE PAS** lancer de migrations (pas de DB)
- Vérifier les versions dans `package.json` avant toute mise à jour
- Le site est 100% statique (SSG)
- Toutes les données sont dans `src/data/`

## 🎯 Pages principales

1. **Accueil** (`index.astro`) - Présentation du groupe
2. **Présentation** (`presentation.astro`) - Histoire et membres
3. **Kill Birgahn** (`killbirgahn.astro`) - Album et tracklist
4. **Concerts** (`shows.astro`) - Dates de concerts
5. **Médias** (`medias.astro`) - Photos, vidéos
6. **Contact** (`contact.astro`) - Informations de contact
