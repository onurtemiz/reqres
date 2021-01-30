import React from 'react';
import HeaderContainerStyles, {
  HeaderTitle,
  HeaderTextWrapper,
} from './styles';
const HeaderContainer = () => {
  return (
    <HeaderContainerStyles>
      <HeaderTextWrapper>
        <a href="https://reqres.in/" target="_blank" rel="noreferrer">
          <HeaderTitle>Reqres Stuff</HeaderTitle>
        </a>
        <a
          href="https://github.com/onurtemiz/"
          target="_blank"
          rel="noreferrer"
        >
          <HeaderTitle>Onur Temiz</HeaderTitle>
        </a>
      </HeaderTextWrapper>
    </HeaderContainerStyles>
  );
};

export default HeaderContainer;
