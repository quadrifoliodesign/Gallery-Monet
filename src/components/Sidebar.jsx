
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', icon: 'fa-home', labelKey: 'home' },
  { path: '/sobre', icon: 'fa-book-open', labelKey: 'about' },
  { path: '/galeria', icon: 'fa-images', labelKey: 'gallery' },
  { path: '/contato', icon: 'fa-envelope', labelKey: 'contact' },
];

const Sidebar = ({ language, toggleLanguage, t, isOpen, toggleSidebar }) => {
  const closeSidebar = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle menu"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="lg:hidden fixed inset-0 bg-black/60 z-30"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 250 }}
        className="fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] text-white shadow-2xl z-40 lg:translate-x-0 flex flex-col"
      >
        <div className="flex-shrink-0 flex items-center justify-center h-24 border-b border-gray-700/50">
          <NavLink to="/" onClick={closeSidebar} className="text-center">
            <i className="fas fa-palette text-3xl text-[#daa417] mb-1"></i>
            <h1 className="font-cinzel text-xl font-bold tracking-wider">MONET</h1>
          </NavLink>
        </div>

        <nav className="flex-grow flex items-center">
          <ul className="w-full space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 w-full rounded-md transition-all duration-300 group ${
                      isActive 
                        ? 'bg-[#daa417] text-black shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`
                  }
                >
                  <i className={`fas ${item.icon} text-lg w-8 text-center`}></i>
                  <span className="ml-3 font-garamond text-lg font-semibold">{t.nav[item.labelKey]}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex-shrink-0 p-4 border-t border-gray-700/50">
          <div className="flex items-center justify-center space-x-2">
            <button 
              onClick={toggleLanguage}
              disabled={language === 'pt'}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors duration-300 ${language === 'pt' ? 'bg-[#daa417] text-black cursor-default' : 'bg-gray-700 hover:bg-gray-600'}`}>
              PT
            </button>
            <button 
              onClick={toggleLanguage}
              disabled={language === 'en'}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors duration-300 ${language === 'en' ? 'bg-[#daa417] text-black cursor-default' : 'bg-gray-700 hover:bg-gray-600'}`}>
              EN
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
