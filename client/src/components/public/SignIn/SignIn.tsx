import React from 'react';
import styled from 'styled-components';

import { Label, Input, Button } from 'components/Elements';
import { IconButton, InputAdornment } from '@mui/material';
import { PasswordOff } from 'images/Icon';

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

export const SignIn = () => {
  return (
    <Container>
      <Title>Sign In</Title>

      <Form>
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

        <Button>Sign In</Button>
      </Form>
    </Container>
  );
};
