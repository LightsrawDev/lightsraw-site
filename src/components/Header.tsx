import React, { useState } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'location', label: 'Location AV' },
    { id: 'partners-av', label: 'Partenaires AV' },
    { id: 'vision', label: 'Vision Aéro & Drones' },
    { id: 'partners-aero', label: 'Partenaires Aéro' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <Lightbulb className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
              Lightsraw
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                  currentPage === item.id 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-yellow-500/20 pt-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 px-3 rounded-md transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'text-yellow-400 bg-yellow-400/10' 
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;