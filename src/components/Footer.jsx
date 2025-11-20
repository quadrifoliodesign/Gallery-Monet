
import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6 mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-garamond text-base">
          {t.footer.developed} <span className="text-[#daa417] font-semibold">Quadrifólio</span> &copy; 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
