import React from 'react';
import styled from 'styled-components';

import { Background, DefaultList, FavouritesList, Header } from './components';

const Container = styled.div`
  position: relative;
  z-index: 10;
`;

const ContainerContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 20px;

  @media (max-width: 625px) {
    justify-content: center;

    gap: 35px;
  }
`;

export const ContactList = () => {
  return (
    <>
      <Background />

      <Container>
        <Header />

        <ContainerContent>
          <DefaultList />
          <FavouritesList />
        </ContainerContent>
      </Container>
    </>
  );
};
