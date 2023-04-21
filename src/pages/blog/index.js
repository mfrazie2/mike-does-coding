import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SeoComponent from '../../components/seoComponent';
import renderTimeToRead from '../../utils/renderTimeToRead';
import ContentWrapper from '../../components/ContentWrapper';
import { useMediaQuery } from '../../hooks/useMediaQuery';

//#region
const BlogEntry = styled.div`
  &:not(:last-of-type) {
    border-bottom: solid 2px;
  }
`;

const BlogTitle = styled(props => <Link {...props} />)`
  color: #173670;
  text-decoration-color: #173670;
`;

const BlogSubtitle = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: unset;

    p {
      margin-bottom: 8px;
      margin-top: unset;
    }
  }
`;

//#endregion

const BlogPage = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const posts = data.allMdx.nodes;

  return (
    <>
      <SeoComponent title={`Blog`} />
      <ContentWrapper>
        {posts.map(post => {
          return (
            <BlogEntry key={post.id}>
              <BlogTitle to={`${post.slug}/`}>
                <h2>{post.frontmatter.title}</h2>
              </BlogTitle>
              <BlogSubtitle>
                <p>{post.frontmatter.date}</p>
                {!isMobile && <p>|</p>}
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
