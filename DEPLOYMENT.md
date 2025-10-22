# 🚀 Guide de Déploiement - IAprod Landing Page

## Avant de déployer

### 1. Ajouter vos images

Remplacez l'image placeholder dans `/public/images/hero_cgp.jpg` par votre propre image professionnelle.

Vous pouvez utiliser des images gratuites de :
- [Unsplash](https://unsplash.com) - Recherchez "financial advisor", "business meeting"
- [Pexels](https://pexels.com) - Recherchez "consultant", "professional meeting"

### 2. Personnaliser les informations de contact

Modifiez les informations dans :
- `src/components/Footer.tsx` - Email et liens sociaux
- `src/components/ContactForm.tsx` - Email et téléphone de contact

### 3. Tester localement

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

## Déploiement sur Vercel (Recommandé)

### Option 1 : Via GitHub (Automatique)

1. Créez un repository GitHub
2. Pushez votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - IAprod landing page"
   git branch -M main
   git remote add origin https://github.com/votre-username/iaprod-cgp.git
   git push -u origin main
   ```

3. Allez sur [vercel.com](https://vercel.com)
4. Cliquez sur "New Project"
5. Importez votre repository GitHub
6. Vercel détectera automatiquement Next.js
7. Cliquez sur "Deploy"

✅ Votre site sera déployé en quelques minutes !

### Option 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

## Déploiement sur Netlify

1. Build du projet :
   ```bash
   npm run build
   ```

2. Sur [netlify.com](https://netlify.com) :
   - Glissez-déposez le dossier `.next` OU
   - Connectez votre repository GitHub

3. Configuration :
   - Build command: `npm run build`
   - Publish directory: `.next`

## Déploiement manuel sur serveur VPS

### 1. Build de production

```bash
npm run build
npm start
```

### 2. Avec PM2 (Process Manager)

```bash
# Installer PM2
npm install -g pm2

# Démarrer l'application
pm2 start npm --name "iaprod" -- start

# Sauvegarder la configuration
pm2 save
pm2 startup
```

### 3. Avec Nginx (Reverse Proxy)

Configuration Nginx :

```nginx
server {
    listen 80;
    server_name votre-domaine.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Variables d'environnement

Si vous ajoutez des API ou services externes, créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
NEXT_PUBLIC_CONTACT_EMAIL=contact@iaprod.fr

# Si vous ajoutez un service d'envoi d'emails
SENDGRID_API_KEY=votre_clé
SMTP_HOST=smtp.exemple.fr
SMTP_PORT=587
```

## Optimisations post-déploiement

### 1. Domaine personnalisé

Sur Vercel :
- Settings → Domains
- Ajoutez votre domaine
- Configurez les DNS selon les instructions

### 2. Analytics

Ajoutez Google Analytics dans `src/app/layout.tsx` :

```tsx
import Script from 'next/script'

// Dans le body :
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 3. Performance

- Les images sont automatiquement optimisées par Next.js
- Le code est automatiquement minifié en production
- Les fonts sont optimisées avec `next/font`

## Tests avant mise en production

- [ ] Toutes les images sont chargées
- [ ] Les liens fonctionnent
- [ ] Le formulaire de contact fonctionne
- [ ] Le site est responsive (mobile, tablet, desktop)
- [ ] Les CTA renvoient vers les bonnes sections
- [ ] Le SEO est optimisé (meta tags, Open Graph)
- [ ] L'accessibilité est validée (contraste, navigation clavier)

## Support

Pour toute question sur le déploiement :
- Documentation Next.js : https://nextjs.org/docs/deployment
- Documentation Vercel : https://vercel.com/docs
- Support : contact@iaprod.fr

---

**Temps de déploiement estimé : 10-15 minutes**

Bon déploiement ! 🚀
