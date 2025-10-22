# 🎨 Guide de Personnalisation - IAprod Landing Page

## 🎯 Modifications rapides

### 1. Changer les couleurs

Fichier : `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'navy': '#1C2A43',    // Bleu nuit principal
      'gold': '#E4C17A',    // Doré accent
      'light-gray': '#F8F9FB', // Fond clair
    },
  },
}
```

### 2. Modifier les textes

Tous les textes sont dans `src/app/page.tsx`. Sections principales :

```tsx
// Hero
<h1>Former les conseillers d'aujourd'hui aux outils de demain.</h1>

// Sous-titre
<p>L'intelligence artificielle au service du conseil patrimonial.</p>

// Accroche
<p>Une formation 100 % métier, 0 % jargon.</p>
```

### 3. Changer les fonts

Fichier : `src/app/layout.tsx`

```tsx
import { Poppins, Inter } from 'next/font/google'

// Remplacer par d'autres fonts Google :
// import { Montserrat, Roboto } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})
```

[Liste des Google Fonts disponibles](https://fonts.google.com/)

### 4. Ajouter/Retirer des sections

Dans `src/app/page.tsx`, chaque section est un bloc `<Section>` :

```tsx
<Section id="votre-id" isDark={false}>
  <div className="max-w-5xl mx-auto">
    <h2>Votre titre</h2>
    <p>Votre contenu...</p>
  </div>
</Section>
```

- `isDark={true}` : fond bleu nuit
- `isDark={false}` : fond clair (par défaut)

### 5. Modifier les CTA (Call-to-Action)

Fichier : `src/components/CTA.tsx`

```tsx
<CTA href="#votre-section" variant="primary">
  Votre texte
</CTA>

// Variants disponibles :
// - "primary" : fond doré
// - "secondary" : fond blanc, bordure
```

### 6. Personnaliser le Header

Fichier : `src/components/Header.tsx`

```tsx
// Changer le logo
<span className="text-2xl font-bold font-poppins text-navy">
  Votre<span className="text-gold">Logo</span>
</span>

// Changer le CTA du header
<a href="#votre-section">
  Votre texte de bouton
</a>
```

### 7. Personnaliser le Footer

Fichier : `src/components/Footer.tsx`

```tsx
// Modifier les liens
<a href="#" className="hover:text-gold transition-colors">
  Votre lien
</a>

// Modifier les réseaux sociaux
<a href="https://votre-lien-linkedin.com">
  <Linkedin size={20} />
</a>
```

## 📸 Gestion des images

### Remplacer l'image hero

1. Ajoutez votre image dans `/public/images/`
2. Format recommandé : JPG ou WebP
3. Dimensions : 1920x1080px minimum
4. Poids : < 500KB (optimisée)

Dans `src/app/page.tsx` :

```tsx
<Image
  src="/images/votre-image.jpg"
  alt="Description"
  fill
  className="object-cover"
  priority
/>
```

### Outils d'optimisation d'images

- [TinyPNG](https://tinypng.com/) - Compression gratuite
- [Squoosh](https://squoosh.app/) - Conversion WebP
- [ImageOptim](https://imageoptim.com/) - Mac

## 🎭 Animations

Les animations utilisent Framer Motion. Pour modifier :

Fichier : `src/components/Section.tsx`

```tsx
<motion.section
  initial={{ opacity: 0, y: 50 }}  // État initial
  animate={{ opacity: 1, y: 0 }}   // État animé
  transition={{ duration: 0.8 }}    // Durée
>
```

Propriétés modifiables :
- `opacity` : transparence (0 à 1)
- `y` : position verticale
- `x` : position horizontale
- `scale` : échelle
- `duration` : durée en secondes

## 📱 Responsive

Les breakpoints Tailwind :
- `sm:` - ≥ 640px (mobile large)
- `md:` - ≥ 768px (tablette)
- `lg:` - ≥ 1024px (desktop)
- `xl:` - ≥ 1280px (grand écran)

Exemple :

```tsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  // Mobile: 2xl, Tablette: 4xl, Desktop: 6xl
</h1>
```

## 🎨 Classes utiles

### Espacements

```
p-4    // padding: 1rem (16px)
m-4    // margin: 1rem
gap-4  // gap: 1rem (pour flex/grid)
```

### Couleurs

```
bg-navy       // Background bleu nuit
text-gold     // Texte doré
border-gold   // Bordure dorée
```

### Typographie

```
font-poppins  // Font titres
font-inter    // Font texte
font-bold     // Poids gras
text-lg       // Taille large
```

## 📝 Ajouter un formulaire email fonctionnel

### Option 1 : Formspree (Gratuit)

1. Inscrivez-vous sur [formspree.io](https://formspree.io)
2. Créez un formulaire
3. Dans `src/components/ContactForm.tsx` :

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  await fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

### Option 2 : SendGrid

```bash
npm install @sendgrid/mail
```

Créez `src/app/api/contact/route.ts` :

```typescript
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  const data = await request.json()
  
  const msg = {
    to: 'contact@iaprod.fr',
    from: 'noreply@iaprod.fr',
    subject: 'Nouvelle demande de contact',
    text: `Nom: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  }
  
  await sgMail.send(msg)
  return NextResponse.json({ success: true })
}
```

## 🔍 SEO

Fichier : `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Votre titre',
  description: 'Votre description',
  keywords: 'mots, clés, pertinents',
  openGraph: {
    title: 'Votre titre',
    description: 'Votre description',
    images: ['/og-image.jpg'],
  },
}
```

## 📊 Analytics

### Google Analytics

Dans `src/app/layout.tsx`, ajoutez avant `</head>` :

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Dans `src/app/layout.tsx` :

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🐛 Debugging

Erreurs communes :

1. **Image ne charge pas** → Vérifiez le chemin dans `/public/images/`
2. **Styles ne s'appliquent pas** → Redémarrez `npm run dev`
3. **Erreur de build** → Vérifiez les imports et la syntaxe TypeScript

## 📞 Support

Questions ? Besoin d'aide ?
- Email : contact@iaprod.fr
- Documentation Next.js : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com/docs

---

**Temps de personnalisation estimé : 30-60 minutes**

Bonne personnalisation ! 🎨
