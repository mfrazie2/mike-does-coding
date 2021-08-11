import React from 'react';
import SeoComponent from '../components/seoComponent';
import ContentWrapper from '../components/ContentWrapper';
import styled from 'styled-components';
import CustomLink from '../components/CustomLink';

//#region
const AboutInner = styled.div`
  display: flex;
`;

const AboutImage = styled.img`
  border-radius: 50%;
  height: 200px;
  margin-right: 5rem;
`;

//#endregion

const AboutPage = () => {
  return (
    <>
      <SeoComponent title={`About`} />
      <ContentWrapper>
        <h2>Hi, I'm Mike</h2>
        <AboutInner>
          <AboutImage
            src="https://avatars2.githubusercontent.com/u/13042612?v=4&s=200"
            alt="Picture of Mike"
          />
          <p>
            I currently work at{' '}
            {
              <CustomLink
                linkSrc="https://www.quizlet.com"
                linkText="Quizlet"
              />
            }{' '}
            as a software engineer building UIs with React and Typescript with a
            Hacklang backend. I’m a co-organizer for the{' '}
            {
              <CustomLink
                linkSrc="https://www.meetup.com/denverscript/"
                linkText="DenverScript"
              />
            }{' '}
            meetup group. Formerly, I was a scientist and educator. I enjoy
            discovering new features, libraries, hacks and more in web
            development and blogging about them. I want to share what I learn.
          </p>
        </AboutInner>
      </ContentWrapper>
    </>
  );
};

export default AboutPage;
