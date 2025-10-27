"use client";

export default function ContactPanel() {
  const contacts = [
    {
      titre: "Email",
      description: "Envoyez-nous un message directement.",
      valeur: "Envoyer un mail",
      cta: "Écrire",
      href: "mailto:baala.mathis@gmail.com",
      icon: "✉",
    },
    {
      titre: "Téléphone",
      description: "Laissez vos coordonnées, nous rappelons.",
      valeur: "Être rappelé",
      cta: "Demander un rappel",
      href: "/contact?topic=appel",
      icon: "☎",
    },
    {
      titre: "LinkedIn",
      description: "Connectez-vous directement avec Mathis.",
      valeur: "Se connecter",
      cta: "Ouvrir LinkedIn",
      href: "https://www.linkedin.com/in/mathis-baala",
      icon: "◈",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-[var(--night)] border-t-4 border-[var(--gold)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Envie d'en savoir plus ?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Planifiez un échange ou contactez-nous directement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
              aria-label={`${contact.cta} - ${contact.titre}`}
            >
              <div className="text-3xl mb-4 text-[var(--gold)]">
                {contact.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {contact.titre}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {contact.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm font-medium">
                  {contact.valeur}
                </span>
                <svg
                  className="w-5 h-5 text-[var(--gold)] group-hover:translate-x-1 transition-transform"
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
              </div>
            </a>
          ))}
        </div>

                {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            Nous répondons sous 48h.
          </p>
        </div>
      </div>
    </section>
  );
}
