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
  title: 'IAprod – L\'IA au service de la performance financière',
  description: 'Former, diagnostiquer, construire. Solutions IA pour les professionnels de la gestion, finance et investissement.',
  keywords: 'formation IA, intelligence artificielle, finance, gestion patrimoniale, audit IA, outils IA, productivité financière',
  authors: [{ name: 'IAprod' }],
  openGraph: {
    title: 'IAprod – L\'IA au service de la performance financière',
    description: 'Former, diagnostiquer, construire. Solutions IA pour les professionnels de la gestion, finance et investissement.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://iaprod.vercel.app',
    siteName: 'IAprod',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAprod – L\'IA au service de la performance financière',
    description: 'Former, diagnostiquer, construire. Solutions IA pour les professionnels de la finance.',
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
