# IAprod - Landing Page pour Conseillers en Gestion de Patrimoine

Landing page professionnelle pour le programme de formation à l'intelligence artificielle destiné aux conseillers en gestion de patrimoine (CGP).

## 🎯 Objectif

Former les conseillers d'aujourd'hui aux outils de demain. L'intelligence artificielle au service du conseil patrimonial.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (titres), Inter (texte)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🎨 Palette de couleurs

- **Bleu nuit**: `#1C2A43`
- **Doré**: `#E4C17A`
- **Gris clair**: `#F8F9FB`
- **Blanc pur**: `#FFFFFF`

## 📁 Structure du projet

```
iaprod-cgp/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout global avec Header/Footer
│   │   ├── page.tsx         # Page principale
│   │   └── globals.css      # Styles globaux
│   └── components/
│       ├── Header.tsx       # Header sticky
│       ├── Footer.tsx       # Footer minimaliste
│       ├── Section.tsx      # Section avec animations
│       ├── CTA.tsx          # Boutons d'appel à l'action
│       └── ScrollProgress.tsx # Barre de progression
├── public/
│   └── images/              # Images (hero, workshop, etc.)
└── ...config files
```

## 📸 Images requises

Ajoutez les images suivantes dans `/public/images/` :

- `hero_cgp.jpg` - Photo professionnelle d'un conseiller ou équipe
- `workshop.jpg` - Atelier de formation
- `team.jpg` - Équipe d'experts
- `documents.jpg` - Documents/workspace professionnel

Voir `/public/images/README.md` pour les spécifications détaillées.

## 🎯 Sections de la landing page

1. **Hero** - Présentation du projet avec CTA principal
2. **Reprendre le contrôle sur son temps** - Gains de productivité
3. **Rendre l'information exploitable** - Base de connaissances
4. **Renforcer la rigueur et la conformité** - Standards et RGPD
5. **Personnaliser la communication client** - Communication personnalisée
6. **Gagner en vision et en agilité** - Veille et stratégie
7. **Pourquoi choisir IAprod** - Expertise et crédibilité
8. **Formats & inscription** - Ateliers et formations
9. **Conclusion** - Appel à l'action final

## 🚢 Déploiement

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

### Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connectez votre repository GitHub à Vercel pour un déploiement automatique.

## ♿ Accessibilité

- Structure sémantique HTML5
- Contraste WCAG AA+
- Focus visible pour la navigation au clavier
- Images avec attributs alt
- Labels ARIA appropriés

## 📱 Responsive

- Mobile-first design
- Breakpoints: mobile (< 768px), tablet (768px-1024px), desktop (> 1024px)
- CTA sticky sur mobile
- Images optimisées avec next/image

## 📄 Licence

© 2024 IAprod. Tous droits réservés.
