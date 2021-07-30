import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo";
import {graphql, Link} from 'gatsby';
import renderTimeToRead from "../../utils/renderTimeToRead";

// markup
const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <SEO title={`Blog`} />
      {posts.map(post => {
        return (
          <Link to={post.slug} key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{renderTimeToRead(post.timeToRead)}</p>
          </Link>
        );
      })}
    </Layout>
  )
}

export const PageQuery = graphql`
  query PageQuery {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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

export default BlogPage
