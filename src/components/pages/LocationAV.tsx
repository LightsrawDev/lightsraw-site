import React from 'react';
import { Camera, Video, Mic, Lightbulb, ExternalLink } from 'lucide-react';

const LocationAV: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Location de matériel <span className="text-yellow-400">audiovisuel professionnel</span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Lightsraw est née de la passion de l'image et de la lumière.<br/>
                Nous proposons à la location un large choix de matériel audiovisuel adapté aux besoins des productions professionnelles, événements, tournages, clips ou contenus corporate.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                Notre matériel est entretenu, performant, prêt à l'emploi. Nous accompagnons les créateurs comme les techniciens avec sérieux et souplesse.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://lightsraw.lokki.rent/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center space-x-2 mx-auto"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Accéder à notre plateforme de location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Notre <span className="text-yellow-400">matériel</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="p-4 bg-yellow-400/10 rounded-lg mb-4 w-fit">
                <Camera className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Caméras & Optiques</h3>
              <p className="text-gray-300 text-sm">
                Caméras professionnelles, objectifs cinéma, stabilisateurs et accessoires de prise de vue.
              </p>
            </div>

            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="p-4 bg-yellow-400/10 rounded-lg mb-4 w-fit">
                <Lightbulb className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Éclairage</h3>
              <p className="text-gray-300 text-sm">
                Projecteurs LED, panneaux, éclairage continu et dispositifs d'éclairage créatif.
              </p>
            </div>

            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="p-4 bg-yellow-400/10 rounded-lg mb-4 w-fit">
                <Mic className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audio</h3>
              <p className="text-gray-300 text-sm">
                Micros, enregistreurs, perches et solutions audio pour tous types de productions.
              </p>
            </div>

            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="p-4 bg-yellow-400/10 rounded-lg mb-4 w-fit">
                <Video className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Accessoires</h3>
              <p className="text-gray-300 text-sm">
                Trépieds, supports, machinerie et tous les accessoires essentiels à vos tournages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Matériel entretenu</h3>
              <p className="text-gray-300">
                Équipements régulièrement contrôlés et maintenus pour garantir leur fiabilité sur vos projets.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Prêt à l'emploi</h3>
              <p className="text-gray-300">
                Matériel testé, configuré et livré prêt à être utilisé pour optimiser votre temps de production.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Accompagnement</h3>
              <p className="text-gray-300">
                Support technique et conseils adaptés à vos besoins, avec sérieux et souplesse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationAV;