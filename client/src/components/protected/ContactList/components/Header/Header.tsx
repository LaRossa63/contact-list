import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/Elements';
import { useLogout } from 'api/services/Auth';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 50px 60px;
`;

const Title = styled.p`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: 36px;
  line-height: 150%;
  color: ${(props) => props.theme.pallette.common.white};
`;

const MyButton = styled(Button)`
  &.MuiButtonBase-root {
    padding: 10px 15px;
  }
`;

export const Header = () => {
  const { mutate: sendData } = useLogout();

  const handleClickLogout = () => {
    sendData();
  };

  return (
    <Container>
      <Title>Contact List</Title>
      <MyButton onClick={handleClickLogout}>Log Out</MyButton>
    </Container>
  );
};
