import React from 'react';
import styled from 'styled-components';
import {
  FaEnvelope,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

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
  width: 960px;
`;

const LinkIconWrapper = styled.a`
  color: #173670;
  margin-left: 16px;
`;
//#endregion

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <p>Coded from a couch (probably) | &copy; 2021</p>
        <div>
          <LinkIconWrapper href="mailto:me@mikedoescoding.com">
            <FaEnvelope size="2em" aria-label="Contact by email" />
          </LinkIconWrapper>
          <LinkIconWrapper
            href="https://github.com/mfrazie2"
            target="_blank"
            referrerPolicy="no-referrer">
            <FaGithubSquare aria-label="Github link" size="2em" />
          </LinkIconWrapper>
          <LinkIconWrapper
            href="https://www.linkedin.com/in/michaelsfrazier"
            target="_blank"
            referrerPolicy="no-referrer">
            <FaLinkedin aria-label="LinkedIn link" size="2em" />
          </LinkIconWrapper>
          <LinkIconWrapper
            href="https://www.twitter.com/AFrazGuy"
            target="_blank"
            referrerPolicy="no-referrer">
            <FaTwitterSquare aria-label="Twitter link" size="2em" />
          </LinkIconWrapper>
        </div>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
