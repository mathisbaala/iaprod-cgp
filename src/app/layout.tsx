import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IAprod – Formation IA pour Conseillers en Gestion de Patrimoine',
  description: 'Former les conseillers d\'aujourd\'hui aux outils de demain. L\'intelligence artificielle au service du conseil patrimonial.',
  keywords: 'formation IA, conseillers patrimoine, CGP, intelligence artificielle, productivité, formation professionnelle',
  authors: [{ name: 'IAprod' }],
  openGraph: {
    title: 'IAprod – Formation IA pour Conseillers en Gestion de Patrimoine',
    description: 'Former les conseillers d\'aujourd\'hui aux outils de demain. L\'intelligence artificielle au service du conseil patrimonial.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
