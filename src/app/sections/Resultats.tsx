"use client";

import Link from "next/link";

export default function Resultats() {
  const resultats = [
    {
      titre: "Gagnez jusqu'à 7 heures par semaine sur l'administratif",
      description: "Automatisez la rédaction de documents, la prise de notes et la préparation de rendez-vous.",
      cta: "Voir comment",
      href: "/#solutions",
    },
    {
      titre: "Standardisez vos documents et vos échanges clients",
      description: "Unifiez votre communication et réduisez les erreurs grâce à des modèles intelligents.",
      cta: "Structurer mes process",
      href: "/#solutions",
    },
    {
      titre: "Fiabilisez vos analyses et votre veille réglementaire",
      description: "Restez à jour sans effort avec des outils qui trient, analysent et alertent.",
      cta: "Voir les outils",
      href: "/#solutions",
    },
    {
      titre: "Plus de clarté, de rigueur et de réactivité côté client",
      description: "Apportez des réponses rapides et précises qui renforcent la confiance.",
      cta: "En parler",
      href: "/contact?topic=qualite",
    },
  ];

  return (
    <section id="resultats" className="py-16 px-6 bg-white border-t-2 border-[var(--gold)]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--night)] mb-4">
            Des résultats concrets, mesurables
          </h2>
          <p className="text-[var(--ink)]/70 max-w-2xl mx-auto leading-relaxed">
            L'IA ne remplace pas le conseiller — elle lui redonne du temps et de la valeur.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {resultats.map((resultat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--cloud)]"
            >
              <h3 className="text-lg font-medium text-[var(--night)] mb-3 leading-snug">
                {resultat.titre}
              </h3>
              <p className="text-[var(--ink)]/70 text-sm leading-relaxed mb-4">
                {resultat.description}
              </p>
              <Link
                href={resultat.href}
                className="inline-flex items-center text-sm font-medium text-[var(--gold)] hover:text-[var(--gold)]/80 transition-colors"
                aria-label={`${resultat.cta} - ${resultat.titre}`}
              >
                {resultat.cta}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
