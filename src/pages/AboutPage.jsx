
import React from 'react';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutPage = ({ t }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>Sobre Claude Monet - Biografia</title>
        <meta name="description" content={`Aprenda sobre a vida, carreira e legado de Claude Monet, o mestre do Impressionismo.`} />
      </Helmet>
      <section id="biography" className="bg-white px-6 py-20 lg:px-20 min-h-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t.biography.title}
            </h1>
            <p className="font-garamond text-2xl text-[#daa417] mb-12 italic">
              {t.biography.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <p className="font-garamond text-lg text-gray-700 leading-relaxed">
              {t.biography.intro}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-cinzel text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-seedling text-[#daa417] mr-3"></i>
                  {t.biography.earlyLife.title}
                </h3>
                <p className="font-garamond text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-[#daa417]/30">
                  {t.biography.earlyLife.content}
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-paint-brush text-[#daa417] mr-3"></i>
                  {t.biography.impressionism.title}
                </h3>
                <p className="font-garamond text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-[#daa417]/30">
                  {t.biography.impressionism.content}
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-water text-[#daa417] mr-3"></i>
                  {t.biography.giverny.title}
                </h3>
                <p className="font-garamond text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-[#daa417]/30">
                  {t.biography.giverny.content}
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-star text-[#daa417] mr-3"></i>
                  {t.biography.legacy.title}
                </h3>
                <p className="font-garamond text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-[#daa417]/30">
                  {t.biography.legacy.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
