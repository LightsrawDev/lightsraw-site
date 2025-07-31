import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import LocationAV from './components/pages/LocationAV';
import PartnersAV from './components/pages/PartnersAV';
import Vision from './components/pages/Vision';
import PartnersAero from './components/pages/PartnersAero';
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'location':
        return <LocationAV />;
      case 'partners-av':
        return <PartnersAV />;
      case 'vision':
        return <Vision />;
      case 'partners-aero':
        return <PartnersAero />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;