import React from 'react';
import ContentContainerStyles from './styles';
const ContentContainer = ({ children, ...restProps }) => {
  return (
    <ContentContainerStyles {...restProps}>{children}</ContentContainerStyles>
  );
};

export default ContentContainer;
