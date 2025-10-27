export function Footer() {
  return (
    <footer className="bg-[var(--night)] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-medium mb-4">
              IA<span className="text-[var(--gold)]">prod</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              L'intelligence artificielle au service de la performance financière.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-[var(--gold)] mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li><a href="/" className="hover:text-[var(--gold)] transition-colors">Accueil</a></li>
              <li><a href="/#solutions" className="hover:text-[var(--gold)] transition-colors">Solutions</a></li>
              <li><a href="/#resultats" className="hover:text-[var(--gold)] transition-colors">Résultats</a></li>
              <li><a href="/#offres" className="hover:text-[var(--gold)] transition-colors">Offres</a></li>
              <li><a href="/#equipe" className="hover:text-[var(--gold)] transition-colors">Équipe</a></li>
              <li><a href="/#contact" className="hover:text-[var(--gold)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-[var(--gold)] mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:baala.mathis@gmail.com"
                className="block text-white/70 text-sm hover:text-[var(--gold)] transition-colors"
              >
                <span className="block text-white font-medium mb-1">Email</span>
                <span className="underline underline-offset-2">Nous envoyer un email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mathis-baala"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 text-sm hover:text-[var(--gold)] transition-colors"
              >
                <span className="block text-white font-medium mb-1">LinkedIn</span>
                <span className="underline underline-offset-2">Se connecter sur LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} IAprod. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
