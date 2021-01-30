import React from 'react';
import { UsersTable } from '../../';
import { MainContainer } from '../../containers';
import HomePageStyles from './styles';
const HomePage = () => {
  return (
    <MainContainer>
      <HomePageStyles>
        <UsersTable />
      </HomePageStyles>
    </MainContainer>
  );
};

export default HomePage;
