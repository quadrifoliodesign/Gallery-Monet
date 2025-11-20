
import React from 'react';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

const ContactPage = ({ t, handleFeatureRequest }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contato - Claude Monet</title>
        <meta name="description" content="Entre em contato para mais informações." />
      </Helmet>
      <div className="min-h-full flex items-center justify-center bg-gray-50 px-6 py-20">
        <motion.div
          className="max-w-xl w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="font-garamond text-2xl text-[#daa417] mb-12 italic">
            {t.contact.subtitle}
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="font-cinzel text-2xl text-gray-800 mb-4">{t.contact.infoTitle}</h2>
            <p className="font-garamond text-lg text-gray-600 mb-6">
              {t.contact.infoContent}
            </p>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
              <p className="font-bold">Aviso</p>
              <p>{t.contact.message}</p>
            </div>
            
            <Button 
                onClick={handleFeatureRequest}
                className="mt-8 bg-[#daa417] hover:bg-[#c49315] text-white font-semibold font-garamond text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
                Solicitar Formulário de Contato
            </Button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
