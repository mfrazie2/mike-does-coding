import React from 'react';
import SeoComponent from '../components/seoComponent';
import { StaticImage } from 'gatsby-plugin-image';
import ContentWrapper from '../components/ContentWrapper';

const IndexPage = () => {
  return (
    <>
      <SeoComponent title={`Home`} />
      <StaticImage
        src="../images/hero.png"
        alt="Mike's drawing of the pale blue dot overlayed with hexagons"
        layout="fullWidth"
        aspectRatio={21 / 9}
      />
      <ContentWrapper>
        <h1>Welcome to my portfolio</h1>
        <p>I want this to be like the original Space Jam website.</p>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
