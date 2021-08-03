import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import SeoComponent from '../../components/seoComponent';

deckDeckGoHighlightElement();

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  const image = getImage(post.frontmatter.image);

  return (
    <>
      <SeoComponent title={post.frontmatter.title} />
      <article>
        {image ? (
          <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
        ) : null}
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </>
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
      }
      body
    }
  }
`;

export default BlogPostPage;
