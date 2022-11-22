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

  margin: 0 auto;
  padding: 20px;
  gap: 400px;
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
