
import React from 'react';
import Gallery from '@/components/Gallery';
import PageTransition from '@/components/PageTransition';
import { Helmet } from 'react-helmet';

const GalleryPage = ({ artworks, language, openLightbox, t }) => {
  return (
    <PageTransition>
       <Helmet>
        <title>Galeria de Obras - Claude Monet</title>
        <meta name="description" content={`Explore uma galeria com mais de ${artworks.length} obras de arte de Claude Monet.`} />
      </Helmet>
      <Gallery 
        artworks={artworks}
        language={language}
        openLightbox={openLightbox}
        t={t}
      />
    </PageTransition>
  );
};

export default GalleryPage;
