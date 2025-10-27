"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResultatsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const chiffres = [
    {
      valeur: "+8 à 12h",
      unite: "/ semaine",
      description: "libérées par collaborateur grâce à l'automatisation des tâches administratives"
    },
    {
      valeur: "+25%",
      unite: "de temps client",
      description: "récupéré sur les activités à forte valeur"
    },
    {
      valeur: "0 erreur",
      unite: "réglementaire",
      description: "détectée dans les livrables IA grâce à nos process conformes"
    },
    {
      valeur: "3 à 6 mois",
      unite: "ROI",
      description: "pour atteindre le retour sur investissement sur l'ensemble des projets IAprod"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[var(--night)] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--night)] via-[var(--night)]/95 to-[var(--night)]/90 z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
            {...fadeInUp}
          >
            Des résultats concrets, visibles et mesurables.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Chaque mission IAprod vise un objectif simple : créer un gain réel — en temps, en clarté et en efficacité.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/solutions"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Découvrir nos solutions
            </Link>
            <Link
              href="/contact?topic=audit"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Demander un audit personnalisé
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CHIFFRES CLÉS SECTION */}
      <section className="bg-[var(--paper)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              L'impact IAprod en quelques chiffres
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {chiffres.map((chiffre, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-[var(--gold)]/20 shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-[var(--gold)]">
                    {chiffre.valeur}
                  </span>
                  <span className="text-xl text-[var(--gold)]/70 font-medium">
                    {chiffre.unite}
                  </span>
                </div>
                <p className="text-[var(--ink)]/70 text-sm leading-relaxed">
                  {chiffre.description}
                </p>
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
              href="/solutions"
              className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold)]/80 font-medium text-sm"
            >
              Voir comment nous obtenons ces résultats
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FORMATION RESULTS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              Résultats des formations IAprod
            </h2>
            <p className="text-lg text-[var(--ink)]/70 leading-relaxed max-w-3xl mx-auto">
              Former vos équipes à l'IA, c'est leur redonner de la méthode et de la sérénité.
              <br />
              Chaque session IAprod transforme le quotidien des professionnels de la finance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                titre: "+6h / semaine",
                description: "gagnées sur la production de comptes rendus et reporting.",
                icon: "⏱"
              },
              {
                titre: "Équipes autonomes",
                description: "capables d'utiliser les bons outils IA au quotidien.",
                icon: "🎯"
              },
              {
                titre: "Livrables homogènes",
                description: "et une communication plus fluide avec les clients.",
                icon: "📊"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[var(--paper)] rounded-xl p-6 border border-[var(--cloud)] hover:border-[var(--gold)]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--night)] mb-3">
                  {item.titre}
                </h3>
                <p className="text-[var(--ink)]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/solutions#formation"
              className="px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200 text-center"
            >
              Découvrir nos formations
            </Link>
            <Link
              href="/contact?topic=formation"
              className="px-6 py-3 bg-transparent border border-[var(--gold)]/30 hover:bg-[var(--panel)] text-[var(--ink)] font-medium rounded-lg transition-all duration-200 text-center"
            >
              Réserver une session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AUDIT & CONSEIL RESULTS */}
      <section className="bg-gradient-to-br from-[var(--night)] to-[var(--night)]/95 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Résultats de nos audits et missions de conseil
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Diagnostiquer, c'est d'abord clarifier.
              <br />
              Nos audits révèlent les pertes de temps invisibles et les transforment en leviers d'efficacité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                titre: "Process simplifiés",
                description: "et cartographiés, avec plan d'action clair et actionnable.",
                icon: "📋"
              },
              {
                titre: "Déploiement IA ciblé",
                description: "uniquement là où la valeur est mesurable et l'impact réel.",
                icon: "🎯"
              },
              {
                titre: "+30% d'efficacité",
                description: "sur les process internes après optimisation.",
                icon: "📈"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--gold)]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.titre}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact?topic=audit"
              className="px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200 text-center"
            >
              Demander un audit IA
            </Link>
            <Link
              href="/solutions"
              className="px-6 py-3 bg-white hover:bg-white/90 text-[var(--night)] font-medium rounded-lg transition-all duration-200 text-center"
            >
              Voir des exemples de missions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OUTILS IA SUR MESURE RESULTS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
              Résultats des outils IA sur mesure
            </h2>
            <p className="text-lg text-[var(--ink)]/70 leading-relaxed max-w-3xl mx-auto">
              Chaque outil IAprod est conçu pour s'intégrer sans friction et apporter un bénéfice immédiat.
              <br />
              Résultat : moins d'administratif, plus d'action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                titre: "Reporting automatisé",
                description: "à 100%, sans perte de contrôle sur vos données.",
                icon: "📊"
              },
              {
                titre: "Zéro ressaisie",
                description: "grâce aux connecteurs IA internes et aux automatisations.",
                icon: "⚡"
              },
              {
                titre: "Alertes intelligentes",
                description: "pour détecter les anomalies en temps réel et anticiper.",
                icon: "🔔"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[var(--night)] to-[var(--night)]/90 rounded-xl p-6 border border-[var(--gold)]/20 text-white hover:border-[var(--gold)]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-3">
                  {item.titre}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/solutions#outils"
              className="px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200 text-center"
            >
              Découvrir nos outils IA
            </Link>
            <Link
              href="/contact?topic=outil"
              className="px-6 py-3 bg-transparent border border-[var(--gold)]/30 hover:bg-[var(--panel)] text-[var(--ink)] font-medium rounded-lg transition-all duration-200 text-center"
            >
              Nous contacter
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
            Et si vos équipes gagnaient dès la première semaine ?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IAprod, c'est une méthode éprouvée : compréhension, diagnostic, implémentation.
            <br />
            Des résultats rapides, mesurables, durables.
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
              href="/solutions"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Découvrir nos solutions
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white hover:bg-white/90 text-[var(--night)] font-medium rounded-lg transition-all duration-300"
            >
              Planifier un échange
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
