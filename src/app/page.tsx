"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Solutions from "./sections/Solutions";
import Resultats from "./sections/Resultats";
import Offres from "./sections/Offres";
import Equipe from "./sections/Equipe";
import ContactPanel from "./sections/ContactPanel";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/workshop.jpg"
            alt="Formation IAprod"
            fill
            className="object-cover hero-image-blur"
            priority
          />
        </div>

        {/* Overlay - Filtre bleu nuit très sombre pour contraste maximal */}
        <div className="absolute inset-0 bg-[var(--night)]/97 z-10" />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-32 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            L'intelligence artificielle au service de la performance financière.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Former. Diagnostiquer. Construire.
            <br />
            Une méthode claire pour intégrer l'IA à votre activité.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/solutions"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
              aria-label="Découvrir nos solutions"
            >
              Découvrir nos solutions
            </Link>
            <Link
              href="/contact?topic=audit"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              aria-label="Demander un audit personnalisé"
            >
              Demander un audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION SOLUTIONS */}
      <Solutions />

      {/* SECTION RÉSULTATS */}
      <Resultats />

      {/* SECTION OFFRES */}
      <Offres />

      {/* SECTION ÉQUIPE */}
      <Equipe />

      {/* SECTION CONTACT */}
      <ContactPanel />
    </>
  );
}
