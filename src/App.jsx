
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

import translations from '@/data/translations.json';
import artworks from '@/data/artworks.json';

function AppContent() {
  const location = useLocation();
  const [language, setLanguage] = useState('pt');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const openLightbox = artwork => {
    setSelectedArtwork(artwork);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const pageTitle = {
    "/": t.nav.home,
    "/sobre": t.nav.about,
    "/galeria": t.nav.gallery,
    "/contato": t.nav.contact,
  }[location.pathname] || "Claude Monet";

  return (
    <>
      <Helmet>
        <title>{pageTitle} - Claude Monet</title>
        <meta name="description" content={t.home.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation 
          language={language}
          toggleLanguage={toggleLanguage}
          t={t}
        />
        
        <main className="flex-1 flex flex-col pt-20">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home t={t} />} />
              <Route 
                path="/galeria" 
                element={
                  <Gallery 
                    t={t} 
                    artworks={artworks} 
                    language={language} 
                    openLightbox={openLightbox} 
                  />
                } 
              />
              <Route path="/sobre" element={<About t={t} />} />
              <Route path="/contato" element={<Contact t={t} />} />
            </Routes>
          </AnimatePresence>
          <Footer t={t} />
        </main>

        {selectedArtwork && (
          <Lightbox 
            artwork={selectedArtwork}
            language={language}
            onClose={closeLightbox}
          />
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
