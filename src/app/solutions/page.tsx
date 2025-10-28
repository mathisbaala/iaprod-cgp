"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[var(--night)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            {...fadeInUp}
          >
            Nos Solutions IA
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Former vos équipes, diagnostiquer vos besoins, construire vos outils IA sur mesure.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/contact?topic=audit"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Demander un audit
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

      {/* FORMATION SECTION */}
      <section id="formation" className="bg-[var(--paper)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--gold)]/10 mb-6">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
                Formation
              </h2>
              <p className="text-lg text-[var(--ink)]/80 mb-6 leading-relaxed">
                Comprendre, apprendre, appliquer.
                <br />
                Des ateliers concrets pour maîtriser l'usage de l'IA dans votre quotidien.
              </p>
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              className="bg-white rounded-xl border border-[var(--gold)]/20 shadow-sm p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Identifier les cas d'usage pertinents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Gagner jusqu'à 7 heures par semaine sur vos tâches répétitives et chronophages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Structurer et automatiser vos livrables clients.</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact?topic=formation"
                  className="block text-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Réserver une session
                </Link>
                <Link
                  href="/resultats#formation"
                  className="block text-center px-6 py-3 bg-transparent border border-[var(--gold)]/30 hover:bg-[var(--panel)] text-[var(--ink)] font-medium rounded-lg transition-all duration-200"
                >
                  Voir les résultats
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUDIT & CONSEIL SECTION */}
      <section id="audit-conseil" className="bg-gradient-to-br from-[var(--night)] to-[var(--night)]/95 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--gold)]/20 shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-white/80">Cartographie des tâches et des points de friction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-white/80">Recommandations personnalisées selon votre métier.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-white/80">Plan d'action clair et mesurable.</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact?topic=audit"
                  className="block text-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Demander un audit
                </Link>
                <Link
                  href="/resultats#audit-conseil"
                  className="block text-center px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Voir des exemples
                </Link>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--gold)]/20 mb-6">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Audit & Conseil
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Diagnostiquer, prioriser, optimiser.
                <br />
                Un état des lieux précis pour identifier les leviers IA à fort impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTILS IA SUR MESURE SECTION */}
      <section id="outils-ia" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--gold)]/10 mb-6">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
                Outils IA sur mesure
              </h2>
              <p className="text-lg text-[var(--ink)]/80 mb-6 leading-relaxed">
                Concevoir, intégrer, sécuriser.
                <br />
                Nous développons des outils IA internes adaptés à vos besoins.
              </p>
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              className="bg-[var(--paper)] rounded-xl border border-[var(--gold)]/20 shadow-sm p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Générateurs de comptes rendus automatisés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Reporting et dashboards connectés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1 flex-shrink-0">◆</span>
                  <span className="text-[var(--ink)]/80">Veille et documentation résumées par IA.</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Parler d'un besoin
                </Link>
                <Link
                  href="/resultats#outils-ia"
                  className="block text-center px-6 py-3 bg-transparent border border-[var(--gold)]/30 hover:bg-[var(--panel)] text-[var(--ink)] font-medium rounded-lg transition-all duration-200"
                >
                  Découvrir nos outils
                </Link>
              </div>
            </motion.div>
          </div>
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
            Prêt à transformer votre quotidien avec l'IA ?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous adaptons chaque solution à vos besoins et à votre métier.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact?topic=audit"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Demander un audit IA
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Planifier un échange
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
