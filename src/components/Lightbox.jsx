
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ artwork, language, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Close"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          
          <div className="lg:w-2/3 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-l-lg">
            <img
              src={artwork.image}
              alt={artwork.title[language]}
              className="w-full h-auto max-h-[50vh] lg:max-h-[90vh] object-contain"
            />
          </div>

          <div className="lg:w-1/3 p-6 lg:p-8 space-y-4 overflow-y-auto">
            <h2 className="font-cinzel text-3xl font-bold text-gray-900 leading-tight">
              {artwork.title[language]}
            </h2>
            <p className="font-garamond text-xl text-[#daa417] flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i>
              {artwork.year}
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-garamond text-lg text-gray-700 leading-relaxed">
                {artwork.description[language]}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
