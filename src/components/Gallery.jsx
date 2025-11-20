
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ artworks, language, openLightbox, t }) => {
  return (
    <section id="gallery" className="bg-gray-50 px-6 py-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t.gallery.title}
          </h1>
          <p className="font-garamond text-xl text-gray-600">
            {artworks.length}+ {t.gallery.artworks}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 20) * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => openLightbox(artwork)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={artwork.image}
                  alt={artwork.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-cinzel text-lg font-semibold text-gray-900 mb-1 truncate">
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
    </section>
  );
};

export default Gallery;
