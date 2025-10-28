"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EquipePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fondateurs = [
    {
      nom: "Mathis",
      role: "Co-fondateur",
      description: "Diplômé d'HEC Paris et de l'École Polytechnique. Finance de marché et intelligence artificielle.",
      image: "/images/baala.jpg",
      linkedin: "https://www.linkedin.com/in/mathis-baala/"
    },
    {
      nom: "Thomas",
      role: "Co-fondateur",
      description: "Diplômé d'HEC Paris et de l'École Polytechnique. Innovation et transformation des métiers financiers.",
      image: "/images/thomas.jpeg",
      linkedin: "https://www.linkedin.com/in/thomas-higadere/"
    },
    {
      nom: "Alexandre",
      role: "Co-fondateur",
      description: "Diplômé de l'École Polytechnique et de Télécom Paris. Data science et stratégie opérationnelle.",
      image: "/images/alex.jpg",
      linkedin: "https://www.linkedin.com/in/alexandre-lkhaoua/"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[var(--night)] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            {...fadeInUp}
          >
            Notre <span className="text-[var(--gold)]">équipe</span>
          </motion.h1>
          <motion.p
            className="text-lg text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Des ingénieurs et financiers issus de HEC Paris et de l'École Polytechnique.
            <br />
            Une même ambition : mettre l'intelligence artificielle au service de la finance.
          </motion.p>
          <motion.p
            className="text-[15px] text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Nous avons fondé IAprod avec une conviction simple : l'IA doit être un levier de clarté et de performance, pas une source de complexité.
            Notre objectif est d'aider les acteurs financiers à intégrer des outils concrets pour fluidifier leurs workflows, réduire les tâches répétitives et recentrer leur temps sur la valeur client.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--gold)] hover:text-[var(--gold)]/80 transition-colors"
            >
              Découvrir nos solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LES FONDATEURS SECTION */}
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
              Les fondateurs
            </h2>
            <p className="text-[15px] text-[var(--ink)]/70 leading-relaxed">
              Trois parcours, une même vision.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fondateurs.map((fondateur, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-5">
                  <div className="relative h-32 w-32 mx-auto mb-4">
                    <Image
                      src={fondateur.image}
                      alt={`${fondateur.nom} - ${fondateur.role}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-semibold text-[var(--night)]">
                      {fondateur.nom}
                    </h3>
                    <a
                      href={fondateur.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--ink)]/40 hover:text-[#0A66C2] transition-colors"
                      aria-label={`Profil LinkedIn de ${fondateur.nom}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-[var(--gold)] text-sm font-medium mt-1">
                    {fondateur.role}
                  </p>
                </div>
                <p className="text-[15px] text-[var(--ink)]/80 leading-6">
                  {fondateur.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE DÉMARCHE SECTION */}
      <section className="bg-[#F6F4F0] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Notre démarche
          </motion.h2>
          <motion.p
            className="text-[15px] text-[var(--night)]/80 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous avons conçu IAprod comme un pont entre la finance et l'intelligence artificielle.
            Nous aidons les professionnels à intégrer des solutions IA concrètes et maîtrisées, pour automatiser sans dénaturer leur métier.
            Notre approche repose sur la précision, la clarté et l'impact mesurable.
          </motion.p>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="bg-[var(--night)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vous souhaitez en savoir plus sur notre équipe ou nos projets ?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contactez-nous directement, nous serons ravis d'échanger.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300"
            >
              Nous contacter
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
            >
              Découvrir nos solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
