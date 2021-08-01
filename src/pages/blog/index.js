import React from 'react';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';
import renderTimeToRead from '../../utils/renderTimeToRead';

// markup
const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <Seo title={`Blog`} />
      {posts.map(post => {
        return (
          <Link to={post.slug} key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{renderTimeToRead(post.timeToRead)}</p>
          </Link>
        );
      })}
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
