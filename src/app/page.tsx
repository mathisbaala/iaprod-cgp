'use client'

import Image from 'next/image'
import { Section } from '@/components/Section'
import { CTA } from '@/components/CTA'
import { motion } from 'framer-motion'
import { Clock, Target, TrendingUp, Check, Calendar, Mail, Phone, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/workshop.jpg"
            alt="Atelier de formation IAprod"
            fill
            className="object-cover hero-image-blur"
            priority
          />
          <div className="absolute inset-0 hero-overlay z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            L&apos;intelligence artificielle au service
            <br />
            du conseil patrimonial.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-4 text-gold font-semibold drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Formations concrètes pour les conseillers en gestion de patrimoine.
            <br />
            Comprendre. Tester. Appliquer.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Une formation 100 % métier — 0 % jargon.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CTA href="#atelier" variant="primary">
              Réserver un atelier découverte (½ journée)
            </CTA>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 - Le constat */}
      <Section id="constat">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy mb-6">
            Un métier d&apos;expertise, saturé de tâches à faible valeur.
          </h2>
          <p className="text-lg text-navy/80 mb-4 leading-relaxed">
            Les conseillers passent jusqu&apos;à 40 % de leur temps à rédiger, classer et reformuler.
          </p>
          <p className="text-lg text-navy/80 mb-8 leading-relaxed">
            Reporting, veille, comptes rendus : essentiels, mais chronophages.
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-lg">
            <p className="text-navy font-semibold text-lg">
              IAprod vous aide à reprendre le contrôle sur votre temps — sans changer vos outils.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - La solution IAprod */}
      <Section isDark id="solution">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Des formations IA concrètes et immédiatement applicables.
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-white/90 leading-relaxed">
              Nos formations vous apprennent à intégrer l&apos;IA dans votre quotidien professionnel.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Vous y découvrez comment automatiser vos tâches répétitives, fiabiliser vos analyses et personnaliser votre communication client.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Une méthode simple, claire et opérationnelle : comprendre, tester, appliquer, sécuriser.
            </p>
          </div>
          <CTA href="#atelier" variant="primary">
            Découvrir nos formats de formation
          </CTA>
        </div>
      </Section>

      {/* SECTION 3 - Bénéfices directs */}
      <Section id="benefices">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy text-center mb-12">
            Des résultats mesurables dès la première semaine.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Clock, text: 'Gagnez jusqu\'à 7 heures par semaine sur vos tâches administratives' },
              { icon: Check, text: 'Standardisez vos documents et vos échanges clients' },
              { icon: Target, text: 'Fiabilisez vos analyses et votre veille réglementaire' },
              { icon: TrendingUp, text: 'Offrez plus de clarté, de rigueur et de réactivité à vos clients' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-navy/10 flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-gold" size={24} />
                </div>
                <p className="text-navy text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border-l-4 border-gold p-8 rounded-lg text-center">
            <p className="text-navy font-semibold text-xl">
              L&apos;IA ne remplace pas le conseiller — elle lui redonne du temps et de la valeur.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - L'équipe IAprod */}
      <Section isDark id="equipe">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-6">
            Une équipe issue de l&apos;ingénierie et de la finance.
          </h2>
          <p className="text-lg text-white/80 text-center mb-12">
            IAprod est porté par trois profils complémentaires :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Mathis Baala',
                school: 'HEC Paris',
                image: '/images/baala.jpg'
              },
              {
                name: 'Thomas',
                school: 'École Polytechnique',
                image: '/images/thomas.jpeg'
              },
              {
                name: 'Alexandre',
                school: 'École Polytechnique',
                image: '/images/alex.JPG'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-poppins text-white mb-2">{member.name}</h3>
                <p className="text-gold font-medium">{member.school}</p>
              </div>
            ))}
          </div>

          <div className="bg-gold/20 border-l-4 border-gold p-6 rounded-lg text-center">
            <p className="text-white text-lg">
              Des formations créées par des ingénieurs et financiers, pour rendre l&apos;IA accessible aux métiers du conseil patrimonial.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 5 - Formats & inscription */}
      <Section id="atelier">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy text-center mb-12">
            Des formats courts, concrets et opérationnels.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Atelier Découverte */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-navy/10 hover:border-gold transition-all duration-300">
              <Calendar className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold font-poppins text-navy mb-2">Atelier Découverte</h3>
              <p className="text-gold font-semibold mb-4">½ journée</p>
              
              <p className="text-navy font-semibold mb-3 text-sm">
                Découvrir les usages concrets de l&apos;IA dans la gestion patrimoniale.
              </p>
              
              <p className="text-navy/70 mb-4 text-sm leading-relaxed">
                Un atelier d&apos;initiation conçu pour comprendre le potentiel réel de l&apos;intelligence artificielle appliquée au métier de conseiller.
                En quatre heures, vous testez des cas d&apos;usage pratiques : génération automatique de comptes rendus, synthèses clients, veille réglementaire.
              </p>
              
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-xs font-semibold text-navy mb-2">Résultats :</p>
                <ul className="text-xs text-navy/80 space-y-1">
                  <li>• Identifier les tâches automatisables</li>
                  <li>• Comprendre les outils IA disponibles</li>
                  <li>• Réflexes immédiatement applicables</li>
                </ul>
              </div>
            </div>

            {/* Formation IA & Productivité */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-navy/10 hover:border-gold transition-all duration-300">
              <Calendar className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold font-poppins text-navy mb-2">Formation IA & Productivité</h3>
              <p className="text-gold font-semibold mb-4">1 journée</p>
              
              <p className="text-navy font-semibold mb-3 text-sm">
                Maîtriser les outils et automatiser vos processus récurrents.
              </p>
              
              <p className="text-navy/70 mb-4 text-sm leading-relaxed">
                Une journée complète pour intégrer efficacement l&apos;IA dans votre organisation.
                À travers des exercices personnalisés, vous apprendrez à automatiser la rédaction, la veille et la gestion documentaire, sans modifier vos outils existants.
              </p>
              
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-xs font-semibold text-navy mb-2">Résultats :</p>
                <ul className="text-xs text-navy/80 space-y-1">
                  <li>• Gagner jusqu&apos;à 7h/semaine</li>
                  <li>• Structurer vos échanges et documents</li>
                  <li>• Améliorer vos livrables clients</li>
                </ul>
              </div>
            </div>

            {/* Parcours Expert */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-navy/10 hover:border-gold transition-all duration-300">
              <Calendar className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold font-poppins text-navy mb-2">Parcours Expert</h3>
              <p className="text-gold font-semibold mb-4">2 jours</p>
              
              <p className="text-navy font-semibold mb-3 text-sm">
                Construire votre propre environnement IA professionnel.
              </p>
              
              <p className="text-navy/70 mb-4 text-sm leading-relaxed">
                Une formation avancée pour concevoir des workflows IA adaptés à votre cabinet :
                rédaction standardisée, suivi client automatisé, analyse documentaire et veille intelligente.
              </p>
              
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-xs font-semibold text-navy mb-2">Résultats :</p>
                <ul className="text-xs text-navy/80 space-y-1">
                  <li>• Créer vos propres modèles IA</li>
                  <li>• Sécuriser vos données (RGPD)</li>
                  <li>• Levier durable d&apos;efficacité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTA href="#contact" variant="primary">
              Réserver mon atelier découverte dès maintenant
            </CTA>
            <p className="text-navy/60 text-sm mt-4">
              4 heures pour comprendre, tester et repartir avec des gains concrets.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - Contact direct */}
      <Section isDark id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Envie d&apos;en savoir plus ?
          </h2>
          <p className="text-lg text-white/80 mb-12">
            Réservez votre atelier découverte dès aujourd&apos;hui ou contactez-nous directement :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:baala.mathis@gmail.com" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all group">
              <Mail className="text-gold mb-4 mx-auto" size={40} />
              <p className="text-white font-semibold mb-2">Email</p>
              <p className="text-white/80 group-hover:text-gold transition-colors">baala.mathis@gmail.com</p>
            </a>

            <a href="tel:0622884184" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all group">
              <Phone className="text-gold mb-4 mx-auto" size={40} />
              <p className="text-white font-semibold mb-2">Téléphone</p>
              <p className="text-white/80 group-hover:text-gold transition-colors">06 22 88 41 84</p>
            </a>

            <a href="https://linkedin.com/in/mathis-baala" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all group">
              <Linkedin className="text-gold mb-4 mx-auto" size={40} />
              <p className="text-white font-semibold mb-2">LinkedIn</p>
              <p className="text-white/80 group-hover:text-gold transition-colors">mathis-baala</p>
            </a>
          </div>

          <div className="mb-8">
            <CTA href="mailto:baala.mathis@gmail.com" variant="primary">
              Réserver un atelier (½ journée)
            </CTA>
          </div>

          <p className="text-white/60 text-sm">
            4 heures pour comprendre, tester et appliquer les usages concrets de l&apos;IA dans votre activité.
          </p>
        </div>
      </Section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden z-40">
        <a
          href="#atelier"
          className="block w-full text-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
        >
          Réserver un atelier
        </a>
      </div>
    </>
  )
}
