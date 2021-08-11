import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SeoComponent from '../../components/seoComponent';
import renderTimeToRead from '../../utils/renderTimeToRead';
import ContentWrapper from '../../components/ContentWrapper';

//#region
const BlogEntry = styled.div`
  &:not(:last-of-type) {
    border-bottom: solid 2px;
  }
`;

const BlogSubtitle = styled.div`
  display: flex;
  gap: 2rem;
`;

//#endregion

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <SeoComponent title={`Blog`} />
      <ContentWrapper>
        {posts.map(post => {
          return (
            <BlogEntry>
              <Link to={`${post.slug}/`} key={post.id}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <BlogSubtitle>
                <p>{post.frontmatter.date}</p>
                <p>|</p>
                <p>{renderTimeToRead(post.timeToRead)}</p>
              </BlogSubtitle>
            </BlogEntry>
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
