import React from 'react';
import { motion } from 'framer-motion';
const Contact = ({
  t
}) => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="flex-grow flex items-center justify-center bg-white p-6">
      <motion.div className="max-w-2xl w-full text-center" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }}>
        <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {t.contact.title}
        </h1>
        <p className="font-garamond text-2xl text-[#daa417] mb-12 italic">
          {t.contact.subtitle}
        </p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <i className="fas fa-info-circle text-3xl text-[#daa417] mb-4"></i>
          <h2 className="font-cinzel text-2xl text-gray-800 mb-3">{t.contact.infoTitle}</h2>
          <p className="font-garamond text-lg text-gray-600 mb-6 leading-relaxed">
            {t.contact.infoContent}
          </p>
          
          <div className="flex items-center justify-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mt-4 text-left" role="alert">
            <p className="font-bold">
              {t.contact.imagesCredit} <a className="text-yellow-800 underline" href="https://www.netmundi.org/home/">{t.contact.imagesCreditSource}</a>
            </p>
            <p className="font-garamond text-lg">{t.contact.formNotice}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>;
};
export default Contact;