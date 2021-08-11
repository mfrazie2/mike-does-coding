import React from 'react';
import SeoComponent from '../../components/seoComponent';
import { graphql, Link } from 'gatsby';
import renderTimeToRead from '../../utils/renderTimeToRead';
import ContentWrapper from '../../components/ContentWrapper';

// markup
const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <SeoComponent title={`Blog`} />
      <ContentWrapper>
        {posts.map(post => {
          return (
            <div>
              <Link to={`${post.slug}/`} key={post.id}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.frontmatter.date}</p>
              <p>{renderTimeToRead(post.timeToRead)}</p>
            </div>
          );
        })}
      </ContentWrapper>
    </>
  );
};

export const PageQuery = graphql`
  query PageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        timeToRead
      }
    }
  }
`;

export default BlogPage;
