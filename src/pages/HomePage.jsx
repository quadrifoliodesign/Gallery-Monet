
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const HomePage = ({ t }) => {
  return (
    <PageTransition>
      <div className="min-h-full flex items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img class="w-full h-full object-cover opacity-10 filter blur-sm scale-110" alt="Impressionist painting background" src="https://images.unsplash.com/photo-1699886279066-15b0089d0552" />
        </div>

        <motion.div 
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            {t.home.title}
          </h1>
          <p className="font-garamond text-2xl md:text-3xl text-[#daa417] mb-8 italic">
            {t.home.subtitle}
          </p>
          <p className="font-garamond text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            {t.home.description}
          </p>
          <Link to="/galeria">
            <motion.button 
                className="bg-[#daa417] hover:bg-[#c49315] text-white font-semibold font-garamond text-xl px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              {t.home.button}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
