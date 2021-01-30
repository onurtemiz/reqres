import React from 'react';
import InputStyles, { InputPasswordStyles } from './styles';
const Input = (props) => {
  return <InputStyles {...props} />;
};

export default Input;

Input.Password = function InputPassword({ children, ...restProps }) {
  return <InputPasswordStyles {...restProps}>{children}</InputPasswordStyles>;
};
