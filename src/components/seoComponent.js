import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/icon.png';

const SeoComponent = ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `twitter:title`,
        //   content: title,
        // },
        // {
        //   property: `twitter:creator`,
        //   content: `AFrazGuy`,
        // },
        // {
        //   property: `twitter:description`,
        //   content: metaDescription,
        // },
        // {
        //   property: `twitter:card`,
        //   content: `summary`,
        // },
      ].concat(meta)}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
  );
};

export default SeoComponent;
