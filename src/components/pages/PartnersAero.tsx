import React from 'react';
import { Plane, Zap, Building, Cog } from 'lucide-react';

const PartnersAero: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partenaires <span className="text-yellow-400">Aéro & Drones</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Lightsraw développe un réseau de partenaires stratégiques dans l'aéronautique et les technologies drones pour concrétiser sa vision d'innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Future Partnership Areas */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Domaines de <span className="text-yellow-400">collaboration</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Building className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Industrie aéronautique</h3>
              <p className="text-gray-300 text-sm">
                Constructeurs, équipementiers et centres de recherche aéronautique.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Technologies drones</h3>
              <p className="text-gray-300 text-sm">
                Fabricants de drones, développeurs de solutions autonomes et IoT.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Cog className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">R&D Avancée</h3>
              <p className="text-gray-300 text-sm">
                Laboratoires, instituts de recherche et centres d'innovation technologique.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Plane className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Systèmes embarqués</h3>
              <p className="text-gray-300 text-sm">
                Spécialistes de l'électronique embarquée et systèmes lumineux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logos Section for Aero */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Partenaires <span className="text-yellow-400">Aéronautique</span>
          </h2>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-12 text-center mb-12">
            <div className="space-y-6">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Plane className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Partenaires Aéronautiques</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cette section accueillera les logos et informations de nos partenaires dans l'industrie aéronautique : constructeurs, équipementiers et centres de recherche.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Partenaires <span className="text-yellow-400">Drones</span>
          </h2>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-12 text-center">
            <div className="space-y-6">
              <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto">
                <Zap className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Partenaires Drones</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cette section présentera nos partenaires spécialisés dans les technologies drones : fabricants, développeurs de solutions autonomes et experts IoT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Écosystème <span className="text-yellow-400">d'innovation</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Objectifs de partenariat</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Co-développement</h4>
                    <p className="text-gray-300">
                      Collaboration sur le développement de solutions innovantes pour l'aéronautique et les drones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Transfert technologique</h4>
                    <p className="text-gray-300">
                      Échange d'expertise et de technologies entre secteurs audiovisuel et aéronautique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Innovation française</h4>
                    <p className="text-gray-300">
                      Promotion du savoir-faire français dans les technologies avancées.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Domaines d'expertise</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Systèmes d'éclairage</h4>
                    <p className="text-gray-300">
                      Solutions d'éclairage intelligent pour cockpits et environnements aéronautiques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Vision embarquée</h4>
                    <p className="text-gray-300">
                      Systèmes de vision et d'acquisition d'images pour drones et aéronefs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Électronique de pointe</h4>
                    <p className="text-gray-300">
                      Modules électroniques haute performance pour applications critiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersAero;