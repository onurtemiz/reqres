import styled from 'styled-components';
import { Button, Input } from '../common';
export default styled.div``;

export const AvatarWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #d8d8d8;
`;
export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledButton = styled(Button)`
  padding: 0px 20px;
  height: 40px;
`;

export const TableHeader = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  max-width: 200px;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 16px;
    cursor: pointer;
    margin-right: 20px;
  }

  .excel-icon {
    color: green;
  }

  .pdf-icon {
    color: red;
  }
`;
