import React from 'react';
import { Users, Award, Handshake } from 'lucide-react';

const PartnersAV: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nos <span className="text-yellow-400">partenaires</span> audiovisuels
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Lightsraw collabore avec les meilleurs acteurs du secteur audiovisuel pour vous offrir un service d'excellence et un matériel de qualité professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Categories */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Marques premium</h3>
              <p className="text-gray-300">
                Partenariats avec les fabricants leaders du matériel audiovisuel professionnel.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Techniciens experts</h3>
              <p className="text-gray-300">
                Réseau de professionnels qualifiés pour vous accompagner sur vos projets.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Handshake className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Studios & loueurs</h3>
              <p className="text-gray-300">
                Collaboration avec des studios et loueurs reconnus pour étendre notre offre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ils nous font <span className="text-yellow-400">confiance</span>
          </h2>
          
          {/* Zone préparée pour les logos des partenaires */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-12 text-center">
            <div className="space-y-6">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Users className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Logos des partenaires</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cette section affichera prochainement les logos de nos partenaires marques, techniciens et studios. 
                L'espace est préparé pour accueillir leurs visuels dans un design élégant et professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Avantages de nos <span className="text-yellow-400">partenariats</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Matériel de dernière génération</h3>
                  <p className="text-gray-300">
                    Accès aux équipements les plus récents grâce à nos partenariats avec les grandes marques.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Formation et expertise</h3>
                  <p className="text-gray-300">
                    Formations continues et expertise technique garanties par nos partenaires spécialisés.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Support technique renforcé</h3>
                  <p className="text-gray-300">
                    Assistance technique directe et réactive grâce à notre réseau de partenaires.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tarifs préférentiels</h3>
                  <p className="text-gray-300">
                    Conditions avantageuses négociées pour vous faire bénéficier des meilleurs prix.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Réseau professionnel</h3>
                  <p className="text-gray-300">
                    Accès à un réseau étendu de professionnels pour vos projets les plus ambitieux.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation constante</h3>
                  <p className="text-gray-300">
                    Veille technologique et accès aux innovations grâce à nos partenaires R&D.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersAV;