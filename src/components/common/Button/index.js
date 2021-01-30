import React from 'react';
import ButtonStyles from './styles';
const Button = ({ children, ...restProps }) => {
  return <ButtonStyles {...restProps}>{children}</ButtonStyles>;
};

export default Button;
