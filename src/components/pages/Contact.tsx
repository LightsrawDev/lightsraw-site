import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contactez <span className="text-yellow-400">Lightsraw</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Prêt à concrétiser votre projet audiovisuel ou curieux de découvrir notre vision technologique ? 
              Nous sommes là pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-300">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form
                action="https://formspree.io/f/meozezka"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="w-full p-3 rounded bg-gray-800 text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full p-3 rounded bg-gray-800 text-white"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  required
                  className="w-full p-3 rounded bg-gray-800 text-white"
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  required
                  className="w-full p-3 rounded bg-gray-800 text-white h-40"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-300 transition"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Informations de contact
                </h2>
                <p className="text-gray-300">
                  Plusieurs moyens de nous joindre pour tous vos projets audiovisuels ou questions sur notre vision technologique.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">
                      lightsrawoff@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Téléphone</h3>
                    <p className="text-gray-300">
                      07 49 80 28 28
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Siège social</h3>
                    <p className="text-gray-300">
                      32 Boulevard de strasbourg 75010<br/>
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mardi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mercredi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jeudi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendredi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>09:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Prêt à collaborer avec <span className="text-yellow-400">Lightsraw</span> ?
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Que ce soit pour un projet audiovisuel ou pour explorer notre vision technologique, nous sommes impatients de discuter avec vous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-yellow-400 font-semibold mb-2">Location audiovisuelle</div>
                <div className="text-gray-300 text-sm">Matériel professionnel disponible</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold mb-2">Innovation</div>
                <div className="text-gray-300 text-sm">Technologie & développement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;