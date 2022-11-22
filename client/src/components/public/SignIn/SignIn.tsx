import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Label, Input, Button, InputPassword } from 'components/Elements';
import { AppRoutes } from 'types/types';
import { useFormSignIn } from 'hooks';

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

export const SignIn = () => {
  const {
    handleSubmitForm,
    handleChangeUserName,
    handleChangePassword,
    handleChangePasswordMode,
    userName,
    password,
    passwordMode,
  } = useFormSignIn();

  return (
    <Container>
      <Title>Sign In</Title>

      <Form onSubmit={handleSubmitForm}>
        <Label>
          <LabelText>User Name</LabelText>

          <Input
            placeholder="Example123"
            value={userName}
            onChange={handleChangeUserName}
          />
        </Label>

        <Label>
          <LabelText>Password</LabelText>

          <InputPassword
            value={password}
            handleChangePassword={handleChangePassword}
            handleChangePasswordMode={handleChangePasswordMode}
            passwordMode={passwordMode}
          />
        </Label>

        <Button>Sign In</Button>
      </Form>

      <Text>
        Don`t have account yet?
        <TextLink to={AppRoutes.SIGN_UP}> New Account</TextLink>
      </Text>
    </Container>
  );
};
