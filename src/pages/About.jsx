
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white px-6 py-16 sm:py-24 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t.biography.title}
          </h1>
          <p className="font-garamond text-2xl text-[#daa417] mb-12 italic">
            {t.biography.subtitle}
          </p>
        </motion.div>

        <div className="space-y-10">
          <p className="font-garamond text-lg text-gray-700 leading-relaxed text-center">
            {t.biography.intro}
          </p>
          <div className="border-t border-gray-200 pt-10 space-y-8">
            <BioSection icon="fa-seedling" title={t.biography.earlyLife.title} content={t.biography.earlyLife.content} />
            <BioSection icon="fa-paint-brush" title={t.biography.impressionism.title} content={t.biography.impressionism.content} />
            <BioSection icon="fa-water" title={t.biography.giverny.title} content={t.biography.giverny.content} />
            <BioSection icon="fa-star" title={t.biography.legacy.title} content={t.biography.legacy.content} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BioSection = ({ icon, title, content }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h3 className="font-cinzel text-2xl font-semibold text-gray-900 mb-3 flex items-center">
      <i className={`fas ${icon} text-[#daa417] mr-4`}></i>
      {title}
    </h3>
    <p className="font-garamond text-lg text-gray-700 leading-relaxed ml-10 pl-4 border-l-2 border-[#daa417]/40">
      {content}
    </p>
  </motion.div>
);

export default About;
