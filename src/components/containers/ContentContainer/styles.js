import styled from 'styled-components';

export default styled.div`
  margin-top: 80px;
  width: 100%;
  min-height: 100vh;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.contentColor};

  display: flex;
  flex-direction: column;
`;
