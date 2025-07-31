import React from 'react';
import { Plane, Zap, Target, Globe, Lightbulb, ArrowRight } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lightsraw : <span className="text-yellow-400">L'innovation sans limites</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Lightsraw ne se limite pas à la location de matériel.<br/>
                Notre ambition est de devenir un acteur innovant dans les domaines de l'aéronautique et des technologies drones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Branches */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lightsraw Aéro */}
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-yellow-400/10 rounded-lg">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Lightsraw Aéro</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lightsraw Aéro développera des solutions audiovisuelles et des systèmes d'éclairage innovants pour les entreprises du secteur aérien.
              </p>
            </div>

            {/* Lightsraw Drones */}
            <div className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-yellow-400/10 rounded-lg">
                  <Zap className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Lightsraw Drones</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lightsraw Drones concevra des drones spécialisés, des accessoires intelligents et des modules lumineux embarqués.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* French Innovation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Globe className="h-12 w-12 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Innovation <span className="text-yellow-400">100% française</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ces deux branches s'inscrivent dans une volonté forte :<br/>
              <span className="text-yellow-400 font-semibold">concevoir, développer et produire 100% en France</span>, dans la mesure du possible.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Target className="h-12 w-12 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Notre <span className="text-yellow-400">vision</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Notre vision est claire : créer des ponts entre l'image, la lumière et la technologie, au service de l'industrie, de la création, et de l'innovation durable.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Diagram */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Nos <span className="text-yellow-400">trois pôles</span> interconnectés
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Pillar 1: Audiovisuel */}
              <div className="text-center space-y-4">
                <div className="bg-yellow-400/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Audiovisuel</h3>
                  <p className="text-gray-300 text-sm">
                    Location de matériel professionnel et expertise technique
                  </p>
                </div>
              </div>

              {/* Pillar 2: Aéronautique */}
              <div className="text-center space-y-4">
                <div className="bg-yellow-400/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto mb-4">
                    <Plane className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Aéronautique</h3>
                  <p className="text-gray-300 text-sm">
                    Solutions audiovisuelles et systèmes d'éclairage spécialisés
                  </p>
                </div>
              </div>

              {/* Pillar 3: Drones */}
              <div className="text-center space-y-4">
                <div className="bg-yellow-400/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="p-4 bg-yellow-400/10 rounded-lg w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Drones</h3>
                  <p className="text-gray-300 text-sm">
                    Conception de drones et modules lumineux intelligents
                  </p>
                </div>
              </div>

              {/* Connection arrows (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-yellow-400/50" />
              </div>
              <div className="hidden md:block absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-yellow-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Nos <span className="text-yellow-400">valeurs</span> d'innovation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">🇫🇷</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Made in France</h3>
              <p className="text-gray-300 text-sm">
                Conception et production française privilégiées
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-white">R&D Continue</h3>
              <p className="text-gray-300 text-sm">
                Innovation constante et développement technologique
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Durable</h3>
              <p className="text-gray-300 text-sm">
                Innovation responsable et développement durable
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-yellow-400">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Visionnaire</h3>
              <p className="text-gray-300 text-sm">
                Technologies d'avenir et solutions innovantes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;