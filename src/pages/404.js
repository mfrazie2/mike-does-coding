import React from 'react';
import SeoComponent from '../components/seoComponent';
import ContentWrapper from '../components/ContentWrapper';

// markup
const NotFoundPage = () => {
  return (
    <ContentWrapper>
      <div>Legiterally nothing to see here</div>
    </ContentWrapper>
  );
};

export const Head = () => <SeoComponent title={`404 Page`} />;

export default NotFoundPage;
