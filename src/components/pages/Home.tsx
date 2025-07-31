import React from 'react';
import { Camera, Zap, Plane, ArrowRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="block">Lightsraw</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-yellow-400 mb-8 animate-pulse">
              L'image, la lumière, l'innovation.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Spécialisés dans la location de matériel audiovisuel professionnel, nous développons une vision ambitieuse vers l'aéronautique et les technologies drones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => setCurrentPage('location')}
              className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Location audiovisuelle</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => setCurrentPage('vision')}
              className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center space-x-2"
            >
              <Plane className="h-5 w-5" />
              <span>Vision Aéro & Drones</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Nos <span className="text-yellow-400">domaines</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location AV */}
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-yellow-400/10 rounded-lg">
                  <Camera className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Location Audiovisuelle</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Matériel professionnel pour vos tournages, événements et productions. Équipements entretenus et performants.
              </p>
              <button
                onClick={() => setCurrentPage('location')}
                className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
              >
                <span>En savoir plus</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Aéronautique */}
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-yellow-400/10 rounded-lg">
                  <Plane className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Lightsraw Aéro</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Solutions audiovisuelles et systèmes d'éclairage innovants pour l'industrie aéronautique.
              </p>
              <button
                onClick={() => setCurrentPage('vision')}
                className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Découvrir la vision</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Drones */}
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-yellow-400/10 rounded-lg">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Lightsraw Drones</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Conception de drones spécialisés, accessoires intelligents et modules lumineux embarqués.
              </p>
              <button
                onClick={() => setCurrentPage('vision')}
                className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Découvrir la vision</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;