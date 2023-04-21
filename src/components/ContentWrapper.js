import React from 'react';
import styled from 'styled-components';

//#region
const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;

  @media (max-width: 970px) {
    padding: 0 16px;
  }
`;

//#endregion

const ContentWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default ContentWrapper;
