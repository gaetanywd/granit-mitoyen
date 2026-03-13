# Checklist SEO Granit Mitoyen

Checklist infra, Google et suivi pour le site vitrine. À cocher au fur et à mesure.

---

## 1. Domaine / DNS / HTTPS

- [ ] Acheter `granitmitoyen.com`
- [ ] Pointer le domaine vers Cloudflare Pages (CNAME ou config fournie par Cloudflare)
- [ ] Choisir la version canonique (ex. `https://granitmitoyen.com` sans `www`)
- [ ] Créer la redirection 301 `https://www.granitmitoyen.com` → `https://granitmitoyen.com`
- [ ] Vérifier sur Cloudflare : HTTPS forcé + HSTS activé

---

## 2. Variables d'environnement du site

- [ ] Ajouter dans `.env` ou sur Cloudflare Pages :
  - `PUBLIC_SITE_URL=https://granitmitoyen.com`
- [ ] Si GA4 choisi :
  - `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` (à récupérer dans GA4)

---

## 3. Google Search Console

- [ ] Aller sur https://search.google.com/search-console
- [ ] Créer une propriété **domaine** : `granitmitoyen.com`
- [ ] Ajouter l'enregistrement **TXT DNS** demandé pour la vérification
- Après déploiement du site :
  - [ ] Vérifier que `https://granitmitoyen.com/sitemap.xml` répond bien
  - [ ] Dans Search Console, onglet **Sitemaps** → soumettre cette URL
  - [ ] Dans les jours/semaines suivantes, vérifier : pages indexées, erreurs, Core Web Vitals

---

## 4. Google Business Profile (SEO local)

- [ ] Aller sur https://www.google.com/business/
- [ ] Créer une fiche "Groupe de musique" au nom **Granit Mitoyen**
- [ ] Renseigner un NAP cohérent :
  - Nom : Granit Mitoyen
  - Ville : Rennes (Bretagne, France)
  - Site : `https://granitmitoyen.com`
- [ ] Ajouter logo, photos groupe, visuels d'album, quelques photos live
- [ ] Ajouter une courte description FR mettant en avant : stoner metal, Rennes, Bretagne, univers Killbirgahn

---

## 5. Profils & backlinks

- [ ] Mettre `https://granitmitoyen.com` comme site officiel sur : YouTube, Bandcamp, Spotify, Insta, Facebook, etc.
- [ ] Vérifier que la bio courte FR/EN est cohérente partout (style + ville + "dark fantasy / Killbirgahn")
- [ ] Contacter :
  - [ ] 2–3 webzines / blogs metal/stoner pour une chronique / interview avec lien vers le site
  - [ ] Les salles / festivals où vous jouez pour qu'ils ajoutent un lien vers le site sur votre fiche

---

## 6. Rituel mensuel (très simple)

- [ ] Ouvrir Search Console → regarder les requêtes, pages qui montent, erreurs
- [ ] Adapter si besoin les `meta.title` / `meta.description` dans les JSON de `content/`
- [ ] Ajouter ou enrichir du texte après chaque nouveau concert important, clip ou sortie

---

## Optionnel : images & perf

- [ ] Optimiser les images dans `public/` (formats modernes, dimensions, compression)
- [ ] Lancer Lighthouse (mobile + desktop) et corriger les principaux points
