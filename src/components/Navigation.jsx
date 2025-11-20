
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', labelKey: 'home' },
  { path: '/sobre', labelKey: 'about' },
  { path: '/galeria', labelKey: 'gallery' },
  { path: '/contato', labelKey: 'contact' },
];

const Navigation = ({ language, toggleLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-cinzel text-2xl font-bold text-gray-800 hover:text-[#daa417] transition-colors">
            Claude Monet
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-garamond text-lg font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:transition-transform after:duration-300 ${
                        isActive
                          ? 'text-[#daa417] after:bg-[#daa417] after:scale-x-100'
                          : 'text-gray-600 hover:text-gray-900 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100'
                      }`
                    }
                  >
                    {t.nav[item.labelKey]}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-8">
              <button onClick={toggleLanguage} disabled={language === 'pt'} className={`px-2 py-1 text-sm font-bold ${language === 'pt' ? 'text-[#daa417]' : 'text-gray-500 hover:text-gray-900'}`}>PT</button>
              <span className="text-gray-300">|</span>
              <button onClick={toggleLanguage} disabled={language === 'en'} className={`px-2 py-1 text-sm font-bold ${language === 'en' ? 'text-[#daa417]' : 'text-gray-500 hover:text-gray-900'}`}>EN</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-800`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-20 pt-20 md:hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col h-full">
              <ul className="flex flex-col items-center space-y-8">
                {navItems.map(item => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `font-cinzel text-2xl font-semibold ${isActive ? 'text-[#daa417]' : 'text-gray-800'}`
                      }
                    >
                      {t.nav[item.labelKey]}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto mb-8 flex items-center justify-center space-x-4">
                <button onClick={() => { toggleLanguage(); setIsOpen(false); }} disabled={language === 'pt'} className={`px-4 py-2 text-lg font-bold ${language === 'pt' ? 'text-[#daa417]' : 'text-gray-500'}`}>Português</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => { toggleLanguage(); setIsOpen(false); }} disabled={language === 'en'} className={`px-4 py-2 text-lg font-bold ${language === 'en' ? 'text-[#daa417]' : 'text-gray-500'}`}>English</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
