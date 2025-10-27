# IAprod - Site Web Professionnel

Site web professionnel pour IAprod, spécialisé dans l'intelligence artificielle appliquée à la finance.

## 🎯 Objectif

L'intelligence artificielle au service de la performance financière. Former, diagnostiquer, construire.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (principal), Poppins (secondaire)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🎨 Palette de couleurs

- **Bleu nuit**: `#0B1222` (--night)
- **Doré sombre**: `#B08D57` (--gold)
- **Encre**: `#1d2540` (--ink)
- **Nuage**: `#F6F7F8` (--cloud)
- **Papier**: `#FAFAFA` (--paper)
- **Panneau**: `#F4F4F4` (--panel)

## 📁 Structure du projet

```
iaprod/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout global
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── globals.css          # Styles globaux
│   │   ├── contact/
│   │   │   └── page.tsx         # Page formulaire contact
│   │   └── sections/
│   │       ├── Solutions.tsx    # 3 piliers (Formation, Audit, Outils)
│   │       ├── Resultats.tsx    # Résultats concrets (4 cartes)
│   │       ├── Offres.tsx       # 3 formats de formation
│   │       ├── Equipe.tsx       # Présentation équipe
│   │       └── ContactPanel.tsx # Section contact (3 cartes)
│   └── components/
│       ├── Header.tsx           # Navigation
│       └── Footer.tsx           # Footer
├── public/
│   ├── images/                  # Photos équipe + workshop
│   └── robots.txt
└── ...config files
```

## 🎯 Sections du site

1. **Hero** - Message principal avec photo workshop
2. **Solutions** - 3 piliers : Formation / Audit & Conseil / Outils IA sur mesure
3. **Résultats** - 4 bénéfices concrets
4. **Offres** - 3 formats de formation (½ jour, 1 jour, 2 jours)
5. **Équipe** - Présentation de l'équipe (ingénierie + finance)
6. **Contact** - 3 moyens de contact (email, téléphone, LinkedIn)

## 📧 Contact

Email unique : baala.mathis@gmail.com

## 🚢 Déploiement

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

### Déploiement sur Vercel

Connectez votre repository GitHub à Vercel pour un déploiement automatique.

## 📱 Responsive

- Mobile-first design
- Navigation hamburger sur mobile
- Grilles adaptatives
- Images optimisées avec next/image

## 📄 Licence

© 2025 IAprod. Tous droits réservés.
