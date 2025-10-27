"use client";

import Link from "next/link";

export default function Solutions() {
  const solutions = [
    {
      titre: "Formation",
      pitch: "Comprendre, apprendre, appliquer.\nNous formons vos équipes aux usages concrets de l'IA dans la finance et la gestion patrimoniale.\nDes ateliers courts, concrets et immédiatement exploitables.",
      benefices: [
        "Identifier les bons usages de l'IA",
        "Gagner en productivité dès la première semaine",
        "Mieux structurer vos échanges et vos livrables",
      ],
      ctaPrimary: { text: "Découvrir les formats", href: "/#offres" },
      ctaSecondary: { text: "Réserver une session", href: "/contact?topic=formation" },
      icon: "◐",
    },
    {
      titre: "Audit & Conseil",
      pitch: "Diagnostiquer, prioriser, optimiser.\nNous réalisons un état des lieux de vos processus pour identifier les leviers IA les plus efficaces.\nUn diagnostic clair, une feuille de route concrète, des gains immédiats.",
      benefices: [
        "Cartographier les tâches à automatiser",
        "Prioriser les cas d'usage à fort impact",
        "Structurer votre transformation IA sereinement",
      ],
      ctaPrimary: { text: "Demander un audit", href: "/contact?topic=audit" },
      ctaSecondary: { text: "Voir des exemples", href: "/#resultats" },
      icon: "◆",
    },
    {
      titre: "Outils IA sur mesure",
      pitch: "Concevoir, intégrer, sécuriser.\nNous développons des outils IA internes adaptés à vos besoins réels : reporting, veille, synthèses, dashboards.\nIntégration fluide et conformité garantie.",
      benefices: [
        "Automatiser vos tâches clés sans changer vos outils",
        "Centraliser vos données de manière sécurisée",
        "Améliorer la réactivité et la fiabilité de vos livrables",
      ],
      ctaPrimary: { text: "Découvrir nos outils", href: "/#contact" },
      ctaSecondary: { text: "Parler d'un besoin", href: "/contact?topic=outil" },
      icon: "✦",
    },
  ];

  return (
    <section id="solutions" className="bg-[var(--paper)] py-16 border-t-2 border-[var(--gold)]/20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
            Nos Solutions
          </h2>
          <p className="text-[15px] md:text-base text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto">
            Une approche complète : comprendre, diagnostiquer, construire.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[var(--cloud)] shadow-sm hover:shadow-lg hover:border-[var(--gold)]/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Header */}
              <div className="px-6 pt-8 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                    <span className="text-[var(--gold)] text-xl">{solution.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--gold)]">
                    {solution.titre}
                  </h3>
                </div>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed whitespace-pre-line">
                  {solution.pitch}
                </p>
              </div>

              {/* Card Body - Benefits */}
              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-2.5">
                  {solution.benefices.map((benefice, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[var(--ink)]/70"
                    >
                      <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">◆</span>
                      <span className="leading-relaxed">{benefice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer - CTAs */}
              <div className="px-6 pb-6 space-y-2.5">
                <Link
                  href={solution.ctaPrimary.href}
                  className="block w-full text-center bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-sm"
                  aria-label={`${solution.ctaPrimary.text} - ${solution.titre}`}
                >
                  {solution.ctaPrimary.text}
                </Link>
                <Link
                  href={solution.ctaSecondary.href}
                  className="block w-full text-center bg-transparent hover:bg-[var(--panel)] text-[var(--ink)] font-medium py-3 px-4 rounded-lg border border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all duration-200 text-sm"
                  aria-label={`${solution.ctaSecondary.text} - ${solution.titre}`}
                >
                  {solution.ctaSecondary.text}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--ink)]/50 italic max-w-2xl mx-auto mb-6">
            Une démarche structurée à chaque étape : formation, diagnostic, intégration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium rounded-lg transition-all duration-200 text-sm"
            >
              Voir toutes nos solutions en détail
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/resultats"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[var(--gold)]/30 hover:bg-[var(--panel)] text-[var(--ink)] font-medium rounded-lg transition-all duration-200 text-sm"
            >
              Découvrir les résultats concrets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
