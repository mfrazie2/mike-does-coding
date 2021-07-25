import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo";
import {graphql, Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <SEO title={`Home Page`} />
      <StaticImage 
        src="https://lh3.googleusercontent.com/pw/AM-JKLX72lJj-vodUgH4IEMAwa3l4P_vlW11Bp3HF6t9JnnSVSXOnEgjZjWcK1oU2qopPpgs0ADZzU-q6foIii85H2fTNviICoGAEtNFfic1qDSn8Fa8PHAHy3Hh052U8vZPstIfZioavFqqxD-VnltKv8MT=w2078-h1560-no"
        alt="Winter in the mountains"
        layout="fullWidth"
        aspectRatio={21/9}
      />
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
