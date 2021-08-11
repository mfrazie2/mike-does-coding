import React from 'react';
import styled from 'styled-components';

//#region
const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
`;

//#endregion

const ContentWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default ContentWrapper;
