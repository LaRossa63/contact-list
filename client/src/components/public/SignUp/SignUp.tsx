import React from 'react';
import styled from 'styled-components';
import { IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';

import { Label, Input, Button } from 'components/Elements';
import { PasswordOff } from 'images/Icon';
import { AppRoutes } from 'types/types';

const Container = styled.div`
  width: 100%;
  max-width: 424px;
  height: 100vh;

  margin: 0 auto;
  padding: 48px 48px 0 48px;

  background-color: ${(props) => props.theme.pallette.background.default};
`;

const Title = styled.p`
  font-size: 56px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  color: ${(props) => props.theme.pallette.common.white};

  margin-top: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 48px;
  gap: 25px;
`;

const LabelText = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-size: 14px;
  line-height: 155%;
  color: ${(props) => props.theme.pallette.common.white};
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  text-align: center;
  color: ${(props) => props.theme.pallette.text.primary};

  margin-top: 25px;
`;

const TextLink = styled(Link)`
  color: ${(props) => props.theme.pallette.text.secondary};
`;

export const SignUp = () => {
  return (
    <Container>
      <Title>Sign Up</Title>

      <Form>
        <Label>
          <LabelText>Full Name</LabelText>
          <Input placeholder="Example Name" />
        </Label>

        <Label>
          <LabelText>User Name</LabelText>
          <Input placeholder="Example123" />
        </Label>

        <Label>
          <LabelText>Password</LabelText>
          <Input
            placeholder="***************"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => console.log('message')}
                  sx={{ mb: 2 }}
                >
                  <PasswordOff />
                </IconButton>
              </InputAdornment>
            }
          />
        </Label>

        <Label>
          <LabelText>Confirm Password </LabelText>
          <Input
            placeholder="***************"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => console.log('message')}
                  sx={{ mb: 2 }}
                >
                  <PasswordOff />
                </IconButton>
              </InputAdornment>
            }
          />
        </Label>

        <Button>Sign Up</Button>
      </Form>

      <Text>
        I have an account.
        <TextLink to={AppRoutes.SIGN_IN}> Go to Sign in</TextLink>
      </Text>
    </Container>
  );
};
