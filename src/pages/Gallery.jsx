
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ t, artworks, language, openLightbox }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white px-6 py-16 sm:py-24 lg:px-20"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t.gallery.title}
          </h1>
          <p className="font-garamond text-xl text-gray-600">
            {artworks.length}+ {t.gallery.artworks}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 12) * 0.04 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => openLightbox(artwork)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={artwork.image}
                  alt={artwork.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></i>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-cinzel text-lg font-semibold text-gray-900 truncate" title={artwork.title[language]}>
                  {artwork.title[language]}
                </h3>
                <p className="font-garamond text-sm text-[#daa417]">
                  {artwork.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
