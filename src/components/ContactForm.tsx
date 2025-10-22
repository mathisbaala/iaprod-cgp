'use client'

import { useState } from 'react'
import { Section } from '@/components/Section'
import { Mail, Phone, Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi (à remplacer par votre API)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSuccess(true)
    setIsSubmitting(false)
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy text-center mb-6">
          Demandez des informations
        </h2>
        <p className="text-lg text-navy/70 text-center mb-12">
          Nous vous répondons sous 24h.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Email</h3>
                <a href="mailto:contact@iaprod.fr" className="text-navy/70 hover:text-gold transition-colors">
                  contact@iaprod.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">Téléphone</h3>
                <a href="tel:+33123456789" className="text-navy/70 hover:text-gold transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>

            <div className="bg-gold/10 p-6 rounded-lg border-l-4 border-gold">
              <p className="text-navy font-medium">
                Formations sur-mesure disponibles pour les cabinets et réseaux de conseillers.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="jean.dupont@exemple.fr"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="+33 6 12 34 56 78"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                Cabinet / Entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Cabinet Dupont & Associés"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                placeholder="Décrivez vos besoins en formation..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSuccess ? (
                <>✓ Message envoyé !</>
              ) : isSubmitting ? (
                <>Envoi en cours...</>
              ) : (
                <>
                  <Send size={20} />
                  Envoyer la demande
                </>
              )}
            </button>

            <p className="text-xs text-navy/60 text-center">
              * Champs obligatoires. Vos données sont traitées conformément au RGPD.
            </p>
          </form>
        </div>
      </div>
    </Section>
  )
}
