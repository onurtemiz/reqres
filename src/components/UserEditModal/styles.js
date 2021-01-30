import styled from 'styled-components';
import { Button, Input } from '../common';
export default styled.div``;

export const StyledInput = styled(Input)``;

export const InputText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.metaColor};
  margin-bottom: 10px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  height: 40px;
  width: 100px;
`;
