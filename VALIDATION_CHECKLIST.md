# ✅ Checklist de Validation - IAprod Landing Page

## 🎯 Tests fonctionnels

### Navigation
- [ ] Le header est sticky (reste en haut lors du scroll)
- [ ] Le bouton "Réserver un atelier" du header scroll vers #atelier
- [ ] Tous les liens d'ancre fonctionnent (#temps, #atelier, #contact)
- [ ] Le CTA mobile sticky apparaît sur mobile uniquement
- [ ] Les liens du footer sont fonctionnels

### Contenu
- [ ] Toutes les sections sont visibles
- [ ] Les textes sont lisibles et sans fautes
- [ ] Les icônes s'affichent correctement
- [ ] L'image hero se charge
- [ ] Les emojis (💡) s'affichent

### Formulaire de contact
- [ ] Les champs obligatoires (*) sont validés
- [ ] L'email nécessite un format valide
- [ ] Le message de succès apparaît après envoi
- [ ] Le formulaire se réinitialise après envoi
- [ ] Les focus states sont visibles

### Animations
- [ ] La barre de progression dorée en haut fonctionne
- [ ] Le header apparaît avec animation au chargement
- [ ] Les sections apparaissent au scroll (fade-in-up)
- [ ] Les hover effects fonctionnent sur les CTA

## 📱 Tests responsive

### Mobile (< 768px)
- [ ] Le layout s'adapte à une seule colonne
- [ ] Les textes sont lisibles (taille appropriée)
- [ ] Le CTA sticky mobile apparaît en bas
- [ ] Les grids passent en 1 colonne
- [ ] Le header reste lisible
- [ ] Les images s'adaptent

### Tablette (768px - 1024px)
- [ ] Le layout utilise 2 colonnes quand approprié
- [ ] Les espacements sont corrects
- [ ] Les images ont une bonne taille

### Desktop (> 1024px)
- [ ] Le layout utilise 3 colonnes quand approprié
- [ ] Le contenu est centré avec max-width
- [ ] Les espacements sont généreux
- [ ] Le hero occupe toute la hauteur

## 🎨 Tests visuels

### Couleurs
- [ ] Bleu nuit (#1C2A43) utilisé pour les textes principaux
- [ ] Doré (#E4C17A) utilisé pour les accents
- [ ] Fond clair (#F8F9FB) alterné avec blanc
- [ ] Contraste suffisant pour l'accessibilité

### Typographie
- [ ] Poppins utilisé pour les titres (h1, h2, h3)
- [ ] Inter utilisé pour le corps de texte
- [ ] Hiérarchie claire (tailles cohérentes)
- [ ] Line-height confortable pour la lecture

### Espacements
- [ ] Padding uniforme dans les sections
- [ ] Marges cohérentes entre les éléments
- [ ] Grids avec gaps appropriés
- [ ] Pas de chevauchement d'éléments

## ♿ Tests d'accessibilité

### Clavier
- [ ] Tab parcourt tous les éléments interactifs
- [ ] Les focus states sont visibles (outline doré)
- [ ] Enter/Space activent les boutons et liens
- [ ] Pas de piège clavier

### Contenu
- [ ] Toutes les images ont un attribut alt
- [ ] La hiérarchie HTML est correcte (h1 → h2 → h3)
- [ ] Les labels de formulaire sont associés aux inputs
- [ ] Le contraste de couleur est AA+ (4.5:1 minimum)

### Screen readers
- [ ] Les liens ont des textes descriptifs
- [ ] Les boutons ont des labels clairs
- [ ] Les aria-labels sont présents où nécessaire
- [ ] La structure sémantique est correcte (header, main, footer, section)

## 🚀 Tests de performance

### Vitesse de chargement
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] Page interactive rapidement
- [ ] Images optimisées et lazy-loaded
- [ ] Fonts chargées de manière optimale

### Console
- [ ] Aucune erreur dans la console
- [ ] Aucun warning bloquant
- [ ] Les ressources se chargent correctement

## 🔍 Tests SEO

### Meta tags
- [ ] Title tag présent et descriptif
- [ ] Meta description présente (150-160 caractères)
- [ ] Meta keywords pertinents
- [ ] Balise lang="fr" sur <html>

### Open Graph
- [ ] og:title défini
- [ ] og:description défini
- [ ] og:type défini
- [ ] og:locale défini (fr_FR)

### Structure
- [ ] Un seul h1 par page
- [ ] Hiérarchie des headings respectée
- [ ] URLs propres et descriptives
- [ ] Sitemap.xml préparé

## 🌐 Tests navigateurs

### Desktop
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Edge (dernière version)

### Mobile
- [ ] Safari iOS
- [ ] Chrome Android
- [ ] Samsung Internet

## 📊 Outils de test recommandés

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Lighthouse (intégré dans Chrome DevTools)

### Accessibilité
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse Accessibility audit

### Responsive
- Chrome DevTools (Device Mode)
- [Responsively](https://responsively.app/)
- Tests sur vrais appareils

### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Screaming Frog](https://www.screamingfrog.co.uk/)

## ✅ Validation finale

Avant de déployer en production :

- [ ] Tous les tests ci-dessus sont passés
- [ ] Les images réelles sont en place (pas de placeholders)
- [ ] Les informations de contact sont correctes
- [ ] Le formulaire envoie vers la bonne adresse
- [ ] Les analytics sont configurés
- [ ] Le domaine est configuré
- [ ] Le SSL/HTTPS est actif
- [ ] Le robots.txt est correct
- [ ] La sitemap est générée

## 🐛 Problèmes connus

_Notez ici les problèmes identifiés et leur statut :_

1. ~~[Problème]~~ - ✅ Résolu
2. [Problème] - 🔄 En cours
3. [Problème] - ⏳ À faire

---

**Score attendu :**
- Performance : > 90
- Accessibilité : 100
- Best Practices : > 90
- SEO : 100

**Date de validation :** _________

**Validé par :** _________

**Prêt pour production :** ☐ Oui  ☐ Non
