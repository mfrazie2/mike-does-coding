import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import ContentWrapper from './ContentWrapper';

//#region
const StyledFooter = styled.footer`
  background-color: #beb7a4;
  width: 100%;
`;

const FooterInner = styled.div`
  align-items: center;
  color: #173670;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 540px) {
    flex-direction: column;
    height: unset;
    padding-bottom: 8px;
  }
`;

const LinkIconWrapper = styled.a`
  color: #173670;

  :not(:first-of-type) {
    margin-left: 16px;
  }
`;
//#endregion

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <FooterInner>
          <p>Coded from a couch (probably) | &copy; 2021</p>
          <div>
            <LinkIconWrapper href="mailto:me@mikedoescoding.com">
              <FaEnvelope size="2em" aria-label="Contact by email" />
            </LinkIconWrapper>
            <LinkIconWrapper
              href="https://github.com/mfrazie2"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer">
              <FaGithubSquare aria-label="Github link" size="2em" />
            </LinkIconWrapper>
            <LinkIconWrapper
              href="https://www.linkedin.com/in/mikesfrazier"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer">
              <FaLinkedin aria-label="LinkedIn link" size="2em" />
            </LinkIconWrapper>
          </div>
        </FooterInner>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;
