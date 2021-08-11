import React from 'react';
import SeoComponent from '../components/seoComponent';
import ContentWrapper from '../components/ContentWrapper';

// markup
const NotFoundPage = () => {
  return (
    <>
      <SeoComponent title={`404 Page`} />
      <ContentWrapper>
        <div>Legiterally nothing to see here</div>
      </ContentWrapper>
    </>
  );
};

export default NotFoundPage;
