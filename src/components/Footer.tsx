import React from 'react';
import { Lightbulb, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo et slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">Lightsraw</span>
            </div>
            <p className="text-yellow-400 text-lg font-medium">
              L'image, la lumière, l'innovation.
            </p>
            <p className="text-gray-400 text-sm">
              Location de matériel audiovisuel professionnel et développement de solutions innovantes dans l'aéronautique et les technologies drones.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Nos services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => setCurrentPage?.('location')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Location audiovisuelle
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage?.('vision')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Solutions aéronautiques
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage?.('vision')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Technologies drones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage?.('contact')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <p className="text-gray-400 text-sm">
              Contactez-nous pour vos projets audiovisuels ou pour en savoir plus sur notre vision technologique.
            </p>
            
            {/* Réseaux sociaux (cachés pour l'instant) */}
            <div className="flex space-x-4" style={{ display: 'none' }}>
              <Facebook className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Lightsraw. Tous droits réservés. Conçu et développé en France.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;