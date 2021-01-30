import styled from 'styled-components';
import { Input } from 'antd';
const { Password } = Input;

export default styled(Input)`
  width: 100%;

  padding-bottom: 10px;
  padding-left: 0;

  font-weight: bold;

  &,
  &:hover,
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.metaColor};
  }
`;

export const InputPasswordStyles = styled(Password)`
  width: 100%;

  padding-bottom: 10px;
  padding-left: 0;

  font-weight: bold;

  &,
  &:hover,
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.metaColor};
  }
`;
