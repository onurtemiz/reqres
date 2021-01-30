import styled from 'styled-components';

export default styled.header`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0px;
  background-color: ${({ theme }) => theme.primaryColor};

  display: flex;
  align-items: center;
  padding: 0px 30px;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderTitle = styled.span`
  font-size: 2em;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
  }
`;
