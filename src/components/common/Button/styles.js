import styled from 'styled-components';
import { Button } from 'antd';

export default styled(Button)`
  &,
  &:active,
  &:hover,
  &:focus {
    box-shadow: none;
    border: none;
    text-shadow: none;
    box-shadow: ${({ shadow }) =>
      shadow ? '0 2px 4px 0 rgba(157, 157, 157, 0.5)' : 'none'};
    border: none;

    color: ${({ theme, type }) =>
      type === 'primary'
        ? '#fafbfc'
        : type === 'primary-inverted'
        ? theme.primaryColor
        : type === 'secondary'
        ? '#fafbfc'
        : type === 'secondary-inverted'
        ? theme.secondaryColor
        : type === 'red'
        ? '#fafbfc'
        : type === 'red-inverted'
        ? '#eb001a'
        : type === 'themed'
        ? theme.theme === 'light'
          ? `#fafbfc`
          : '#090909'
        : type === 'themed-inverted'
        ? theme.theme === 'light'
          ? '#090909'
          : '#fafbfc'
        : '#fafbfc'};

    background-color: ${({ theme, type }) =>
      type === 'primary'
        ? theme.primaryColor
        : type === 'secondary'
        ? theme.secondaryColor
        : type === 'red'
        ? '#eb001a'
        : type === 'themed'
        ? theme.theme === 'light'
          ? `#090909`
          : '#fafbfc'
        : type && type.includes('inverted')
        ? 'transparent'
        : theme.primaryColor};

    border: ${({ theme, type }) =>
      type === 'primary-inverted'
        ? `2px solid ${theme.primaryColor}`
        : type === 'secondary-inverted'
        ? `2px solid ${theme.secondaryColor}`
        : type === 'red-inverted'
        ? `2px solid #eb001a`
        : type === 'themed-inverted'
        ? theme.theme === 'light'
          ? '2px solid #090909'
          : '2px solid #fafbfc'
        : 'none'};
  }

  font-weight: bold;
  border-radius: 9px;
`;
