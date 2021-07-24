import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo";
import {graphql, Link} from 'gatsby';

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <SEO title={`Home Page`} />
      {posts.map(post => {
        return (
          <Link to={post.slug} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        );
      })}
    </Layout>
  )
}

export const PageQuery = graphql`
  query PageQuery {
    allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage
