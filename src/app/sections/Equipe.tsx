"use client";

import Image from "next/image";

export default function Equipe() {
  const membres = [
    {
      nom: "Mathis",
      formation: "École Polytechnique • HEC Paris",
      photo: "/images/baala.jpg",
    },
    {
      nom: "Thomas",
      formation: "École Polytechnique • HEC Paris",
      photo: "/images/thomas.jpeg",
    },
    {
      nom: "Alexandre",
      formation: "École Polytechnique • Télécom Paris",
      photo: "/images/alex.JPG",
    },
  ];

  return (
    <section id="equipe" className="py-16 px-6 bg-white border-t-2 border-[var(--gold)]/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--night)] mb-4">
            Une équipe issue de l'ingénierie et de la finance
          </h2>
          <p className="text-[15px] md:text-base text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto mb-2">
            IAprod est porté par trois profils complémentaires.
          </p>
          <p className="text-[15px] md:text-base text-[var(--ink)]/70 leading-relaxed max-w-2xl mx-auto">
            Des formations créées par des ingénieurs et financiers, pour rendre l'IA accessible aux métiers de la gestion, de l'investissement et de la finance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {membres.map((membre, index) => (
            <div
              key={index}
              className="group bg-[var(--paper)] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[var(--gold)]/20 group-hover:ring-[var(--gold)]/40 transition-all">
                <Image
                  src={membre.photo}
                  alt={membre.nom}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-[var(--night)] mb-2">
                {membre.nom}
              </h3>
              <p className="text-sm text-[var(--ink)]/70 leading-relaxed">
                {membre.formation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
