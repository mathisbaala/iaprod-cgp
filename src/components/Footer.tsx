import { Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">
              IA<span className="text-gold">prod</span>
            </h3>
            <p className="text-white/80 text-sm">
              Former les conseillers d'aujourd'hui aux outils de demain.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-gold transition-colors">
                  Nos formations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@iaprod.fr"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} IAprod. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
