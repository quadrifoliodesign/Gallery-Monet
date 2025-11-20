
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex items-center justify-center text-center p-6"
    >
      <div className="absolute inset-0 z-0 pt-20">
          <img class="w-full h-full object-cover opacity-15" alt="Impressionist painting background of a serene lake with water lilies" src="https://images.unsplash.com/photo-1689016466319-f77129f1a7b6" />
      </div>
      <motion.div 
        className="relative z-10 max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-gray-900 mb-4">
          {t.home.title}
        </h1>
        <p className="font-garamond text-2xl md:text-3xl text-[#daa417] mb-8 italic">
          {t.home.subtitle}
        </p>
        <p className="font-garamond text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.home.description}
        </p>
        <Link to="/galeria">
          <motion.button 
            className="bg-[#daa417] text-black font-cinzel font-semibold text-lg px-10 py-3 rounded-lg shadow-lg hover:bg-[#c49315] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.home.button}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
