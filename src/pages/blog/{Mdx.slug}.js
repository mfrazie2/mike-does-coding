import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import SeoComponent from '../../components/seoComponent';
import ContentWrapper from '../../components/ContentWrapper';
import styled from 'styled-components';

deckDeckGoHighlightElement();

const Date = styled.p`
  font-style: italic;
`;

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  const image = getImage(post.frontmatter.image);

  return (
    <ContentWrapper>
      <article>
        {image ? (
          <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
        ) : null}
        <h1>{post.frontmatter.title}</h1>
        <Date>{post.frontmatter.date}</Date>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </ContentWrapper>
  );
};

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [JPG, PNG]
            )
          }
        }
        imageAlt
      }
      body
    }
  }
`;

export const Head = ({ pageContext }) => (
  <SeoComponent title={pageContext.title} />
);

export default BlogPostPage;
