"use client";

import Link from "next/link";

export default function Offres() {
  const offres = [
    {
      titre: "Atelier Découverte",
      duree: "½ journée",
      pitch: "Découvrez comment l'IA peut transformer votre quotidien. Format interactif avec cas pratiques.",
      resultats: [
        "Comprendre les usages concrets de l'IA",
        "Identifier 3 gains de temps immédiats",
        "Repartir avec une feuille de route",
      ],
      ctaPrimary: { text: "Réserver", href: "/contact?topic=atelier" },
      ctaSecondary: { text: "Programme", href: "/#solutions" },
    },
    {
      titre: "Formation IA & Productivité",
      duree: "1 journée",
      pitch: "Maîtrisez les outils d'IA générative pour automatiser vos tâches et structurer votre activité.",
      resultats: [
        "Automatiser emails et documents",
        "Créer vos propres modèles intelligents",
        "Intégrer l'IA à vos process métier",
      ],
      ctaPrimary: { text: "S'inscrire", href: "/contact?topic=formation" },
      ctaSecondary: { text: "Exemples", href: "/#resultats" },
    },
    {
      titre: "Parcours Expert",
      duree: "2 jours",
      pitch: "Formation avancée + audit personnalisé de votre cabinet. Diagnostic complet et outils sur mesure.",
      resultats: [
        "Audit de vos process et besoins",
        "Outils IA adaptés à votre métier",
        "Accompagnement post-formation",
      ],
      ctaPrimary: { text: "Nous contacter", href: "/contact?topic=expert" },
      ctaSecondary: { text: "Voir nos solutions", href: "/#solutions" },
    },
  ];

  return (
    <section id="offres" className="py-16 px-6 bg-[var(--paper)] border-t-2 border-[var(--gold)]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--night)] mb-4">
            Des formats courts, concrets et opérationnels
          </h2>
          <p className="text-[var(--ink)]/70 max-w-2xl mx-auto leading-relaxed">
            Choisissez le format qui correspond à votre niveau et à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offres.map((offre, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[var(--cloud)] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-[var(--panel)] px-6 py-5 border-b border-[var(--cloud)]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-medium text-[var(--night)]">
                    {offre.titre}
                  </h3>
                  <span className="text-sm text-[var(--gold)] font-medium whitespace-nowrap ml-3">
                    {offre.duree}
                  </span>
                </div>
                <p className="text-[var(--ink)]/70 text-sm leading-relaxed">
                  {offre.pitch}
                </p>
              </div>

              {/* Body */}
              <div className="px-6 py-5 flex-grow">
                <h4 className="text-sm font-medium text-[var(--ink)] mb-3 uppercase tracking-wide">
                  Résultats
                </h4>
                <ul className="space-y-2">
                  {offre.resultats.map((resultat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-[var(--ink)]/80"
                    >
                      <span className="text-[var(--gold)] mr-2 mt-0.5">◆</span>
                      <span className="leading-relaxed">{resultat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTAs */}
              <div className="px-6 pb-6 space-y-2">
                <Link
                  href={offre.ctaPrimary.href}
                  className="block w-full text-center bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  aria-label={`${offre.ctaPrimary.text} - ${offre.titre}`}
                >
                  {offre.ctaPrimary.text}
                </Link>
                <Link
                  href={offre.ctaSecondary.href}
                  className="block w-full text-center bg-transparent hover:bg-[var(--panel)] text-[var(--ink)] font-medium py-3 px-4 rounded-lg border border-[var(--cloud)] transition-colors duration-200"
                  aria-label={`${offre.ctaSecondary.text} - ${offre.titre}`}
                >
                  {offre.ctaSecondary.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
