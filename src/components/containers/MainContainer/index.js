import React from 'react';
import { HeaderContainer, ContentContainer } from '../';
import MainContainerStyles from './styles';
const MainContainer = ({ children, ...restProps }) => {
  return (
    <MainContainerStyles {...restProps}>
      <HeaderContainer />
      <ContentContainer>{children}</ContentContainer>
    </MainContainerStyles>
  );
};

export default MainContainer;
