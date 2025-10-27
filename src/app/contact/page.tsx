"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ContactForm() {
  const searchParams = useSearchParams();
  const [topic, setTopic] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });

  useEffect(() => {
    const topicParam = searchParams.get("topic");
    if (topicParam) {
      setTopic(topicParam);
      
      // Pre-fill message based on topic
      const messages: Record<string, string> = {
        atelier: "Je souhaite en savoir plus sur l'Atelier Découverte.",
        formation: "Je suis intéressé par la Formation IA & Productivité.",
        expert: "Je souhaite discuter du Parcours Expert.",
        audit: "J'aimerais obtenir un audit personnalisé.",
        qualite: "Je souhaite améliorer la qualité de service de mon cabinet.",
        appel: "Je souhaite être rappelé pour discuter de vos services.",
        besoin: "J'ai un besoin spécifique en outils IA sur mesure.",
      };
      
      setFormData((prev) => ({
        ...prev,
        message: messages[topicParam] || "",
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Contact IAprod - ${topic || "Demande d'information"}`;
    const body = `
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Entreprise: ${formData.entreprise}

Message:
${formData.message}
    `.trim();
    
    window.location.href = `mailto:baala.mathis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-[var(--gold)] hover:text-[var(--gold)]/80 mb-6 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-medium text-[var(--night)] mb-4">
            Prenons contact
          </h1>
          <p className="text-[var(--ink)]/70 leading-relaxed">
            Remplissez ce formulaire et nous vous répondrons sous 24h.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm border border-[var(--cloud)] p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="prenom"
                className="block text-sm font-medium text-[var(--night)] mb-2"
              >
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                required
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-[var(--night)] mb-2"
              >
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--night)] mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-[var(--night)] mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="entreprise"
              className="block text-sm font-medium text-[var(--night)] mb-2"
            >
              Entreprise / Cabinet
            </label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--night)] mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--cloud)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Envoyer le message
          </button>

          <p className="text-xs text-[var(--ink)]/50 text-center">
            En envoyant ce formulaire, vous serez redirigé vers votre client email.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center">
        <div className="text-[var(--ink)]">Chargement...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
