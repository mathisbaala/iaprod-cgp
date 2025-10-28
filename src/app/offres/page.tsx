"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OffresPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const formations = [
    {
      titre: "Atelier Découverte",
      duree: "½ journée",
      pitch: "Comprendre les usages concrets de l'IA. Identifier les bons cas d'usage. Gagner en efficacité dès le lendemain.",
      resultats: [
        "Identifier les cas d'usage pertinents",
        "Maîtriser les prompts essentiels",
        "Appliquer l'IA dès le lendemain"
      ],
      ctaPrimary: { text: "Réserver", href: "/contact?topic=atelier" },
      ctaSecondary: { text: "Programme", href: "/solutions#formation" }
    },
    {
      titre: "IA & Productivité",
      duree: "1 journée",
      pitch: "Accélérer la production. Standardiser les livrables. Libérer du temps pour le client.",
      resultats: [
        "Gagner 6-8h par semaine",
        "Améliorer la qualité des livrables",
        "Structurer vos processus documentaires"
      ],
      ctaPrimary: { text: "S'inscrire", href: "/contact?topic=formation" },
      ctaSecondary: { text: "Exemples", href: "/resultats" }
    },
    {
      titre: "Parcours Expert",
      duree: "2 jours",
      pitch: "Construire vos workflows IA. Sécuriser l'usage des données. Installer des pratiques durables.",
      resultats: [
        "Workflows personnalisés et automatisés",
        "Standardisation et conformité RGPD",
        "Autonomie complète de vos équipes"
      ],
      ctaPrimary: { text: "Nous contacter", href: "/contact?topic=expert" },
      ctaSecondary: { text: "Voir Solutions", href: "/solutions#formation" }
    }
  ];

  const audits = [
    {
      titre: "Diagnostic complet",
      benefices: [
        "Cartographie des frictions et tâches répétitives",
        "Feuille de route priorisée et réaliste",
        "Gains mesurables dès les premières semaines"
      ],
      ctaPrimary: { text: "Demander un audit", href: "/contact?topic=audit" },
      ctaSecondary: { text: "Voir résultats", href: "/resultats#audit-conseil" }
    },
    {
      titre: "Conseil opérationnel",
      benefices: [
        "Déploiement ciblé sur les cas d'usage à fort impact",
        "Gouvernance des données et conformité",
        "Acculturation des équipes"
      ],
      ctaPrimary: { text: "Parler de vos besoins", href: "/contact?topic=conseil" },
      ctaSecondary: { text: "Voir Solutions", href: "/solutions#audit-conseil" }
    }
  ];

  const outils = [
    {
      titre: "Automatisations documentaires",
      benefices: [
        "Génération de comptes rendus et communications",
        "Résumés de notes de marché et documentation",
        "Standardisation du ton et des formats"
      ],
      ctaPrimary: { text: "Découvrir nos outils", href: "/solutions#outils-ia" },
      ctaSecondary: { text: "Voir cas d'usage", href: "/resultats#outils-ia" },
      darkBg: false
    },
    {
      titre: "Dashboards & Connecteurs",
      benefices: [
        "Reporting automatisé, sans ressaisie",
        "Connecteurs Excel/CRM/Bases internes",
        "Alertes et suivi en temps réel"
      ],
      ctaPrimary: { text: "Parler d'un besoin", href: "/contact?topic=outil" },
      ctaSecondary: { text: "Nous contacter", href: "/contact" },
      darkBg: true
    }
  ];

  const faqs = [
    {
      question: "Combien de temps pour un premier impact ?",
      reponse: "Généralement sous 1 à 3 semaines après la formation ou l'audit."
    },
    {
      question: "Faut-il changer d'outils ?",
      reponse: "Non. Nous intégrons l'IA dans vos outils existants."
    },
    {
      question: "Quid de la conformité ?",
      reponse: "Nous respectons RGPD et vos exigences internes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[var(--night)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            {...fadeInUp}
          >
            Nos offres
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Des formats clairs, actionnables et adaptés à votre organisation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/contact?topic=devis"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FORMATIONS SECTION */}
      <section className="bg-[var(--paper)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              Formations
            </h2>
            <p className="text-[15px] text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto">
              Comprendre, appliquer, structurer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-[var(--night)]">
                    {formation.titre}
                  </h3>
                  <span className="text-sm text-[var(--gold)] font-medium">
                    {formation.duree}
                  </span>
                </div>
                <p className="text-[15px] leading-6 text-[var(--ink)]/80 mb-5">
                  {formation.pitch}
                </p>
                
                {/* Bloc Résultats */}
                <div className="mt-auto">
                  <div className="rounded-lg bg-[#F4F4F4] p-4 mb-5">
                    <p className="text-xs font-semibold text-[var(--ink)]/60 uppercase tracking-wide mb-3">
                      Résultats
                    </p>
                    <ul className="space-y-2">
                      {formation.resultats.map((resultat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--ink)]/80">
                          <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">◆</span>
                          <span>{resultat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2">
                    <Link
                      href={formation.ctaPrimary.href}
                      className="block text-center rounded-md bg-[var(--gold)] hover:opacity-90 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200"
                    >
                      {formation.ctaPrimary.text}
                    </Link>
                    <Link
                      href={formation.ctaSecondary.href}
                      className="block text-center rounded-md border border-[var(--gold)] hover:bg-[#F6F7F8] px-4 py-2.5 text-sm font-medium text-[var(--night)] transition-all duration-200"
                    >
                      {formation.ctaSecondary.text}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT & CONSEIL SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              Audit & Conseil
            </h2>
            <p className="text-[15px] text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto">
              Diagnostiquer, prioriser, optimiser.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {audits.map((audit, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h3 className="text-xl font-semibold text-[var(--night)] mb-5">
                  {audit.titre}
                </h3>
                
                <div className="rounded-lg bg-[#F4F4F4] p-4 mb-5">
                  <ul className="space-y-3">
                    {audit.benefices.map((benefice, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--ink)]/80">
                        <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">◆</span>
                        <span>{benefice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    href={audit.ctaPrimary.href}
                    className="block text-center rounded-md bg-[var(--gold)] hover:opacity-90 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200"
                  >
                    {audit.ctaPrimary.text}
                  </Link>
                  <Link
                    href={audit.ctaSecondary.href}
                    className="block text-center rounded-md border border-[var(--gold)] hover:bg-[#F6F7F8] px-4 py-2.5 text-sm font-medium text-[var(--night)] transition-all duration-200"
                  >
                    {audit.ctaSecondary.text}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTILS IA SUR MESURE SECTION */}
      <section className="bg-[var(--paper)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              Outils IA sur mesure
            </h2>
            <p className="text-[15px] text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto">
              Concevoir, intégrer, sécuriser.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {outils.map((outil, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl border p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${
                  outil.darkBg 
                    ? 'bg-gradient-to-br from-[var(--night)] to-[var(--night)]/95 border-[var(--gold)]/20 text-white'
                    : 'bg-white border-[rgba(0,0,0,0.06)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h3 className={`text-xl font-semibold mb-5 ${outil.darkBg ? 'text-white' : 'text-[var(--night)]'}`}>
                  {outil.titre}
                </h3>
                
                <div className={`rounded-lg p-4 mb-5 ${outil.darkBg ? 'bg-white/5' : 'bg-[#F4F4F4]'}`}>
                  <ul className="space-y-3">
                    {outil.benefices.map((benefice, idx) => (
                      <li key={idx} className={`flex items-start gap-2 text-sm ${outil.darkBg ? 'text-white/80' : 'text-[var(--ink)]/80'}`}>
                        <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">◆</span>
                        <span>{benefice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    href={outil.ctaPrimary.href}
                    className="block text-center rounded-md bg-[var(--gold)] hover:opacity-90 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200"
                  >
                    {outil.ctaPrimary.text}
                  </Link>
                  <Link
                    href={outil.ctaSecondary.href}
                    className={`block text-center rounded-md border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      outil.darkBg 
                        ? 'border-white/30 text-white hover:bg-white/10'
                        : 'border-[var(--gold)] text-[var(--night)] hover:bg-[#F6F7F8]'
                    }`}
                  >
                    {outil.ctaSecondary.text}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-[var(--night)] mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-[rgba(0,0,0,0.06)] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F4F4F4] transition-colors"
                >
                  <span className="text-[15px] font-medium text-[var(--night)]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[var(--gold)] transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-[var(--ink)]/70 leading-relaxed">
                    {faq.reponse}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/resultats"
              className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-[var(--gold)]/80 font-medium"
            >
              Voir nos résultats
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[var(--night)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Prêt à avancer ?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choisissez un format, demandez un audit, ou décrivez votre besoin.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact?topic=formation"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Réserver une formation
            </Link>
            <Link
              href="/contact?topic=audit"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Demander un audit IA
            </Link>
            <Link
              href="/contact?topic=outil"
              className="px-8 py-3 bg-white hover:bg-white/90 text-[var(--night)] font-medium rounded-lg transition-all duration-300"
            >
              Parler d'un outil sur mesure
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
