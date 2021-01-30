import styled from 'styled-components';
import { Input, Button } from '../../common';

export default styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
    max-width: 400px;
  }
`;

export const Email = styled(Input)`
  & input {
    margin-left: 5px;
  }

  height: 40px;
`;

export const Password = styled(Input.Password)`
  & input {
    margin-left: 5px;
  }

  height: 40px;
`;

export const StyledButton = styled(Button)`
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
`;
