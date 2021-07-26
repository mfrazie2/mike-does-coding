import React from 'react';
import {graphql} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostPage = ({data}) => {
    const post = data.mdx;
    const image = getImage(post.frontmatter.image);

    return (
        <Layout>
            <article>
                {image ? (<GatsbyImage image={image} alt={post.frontmatter.imageAlt} />) : null}
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <MDXRenderer>{post.body}</MDXRenderer>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query BlogPostById($id: String) {
        mdx(id: {eq: $id}) {
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