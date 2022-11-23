import React, { ChangeEvent, useState, FormEvent } from 'react';

import { SignInDto, ValidValue } from 'types/types';
import { useSignIn } from 'api/services/Auth';

export const useFormSignIn = () => {
  const [userName, setUserName] = useState('LaRossa63');
  const [password, setPassword] = useState('qwaszx123');
  const [passwordMode, setPasswordMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync: sendData } = useSignIn(handleErrorResponse);

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: SignInDto = {
      userName,
      password,
    };

    const resultValidation = validationFormSignUp(user);

    if (resultValidation) {
      setError(resultValidation);
      return;
    }

    await sendData(user);
    clearInput();
  };

  function handleErrorResponse(error: any) {
    const { response } = error;

    if (response.status === 400) {
      setError(response.data.message);
      return;
    }

    setError('Что-то пошло не так');
  }

  const validationFormSignUp = (user: SignInDto) => {
    const { userName, password } = user;

    if (
      userName.length < ValidValue.MIN_USER_NAME ||
      userName.length > ValidValue.MAX_USER_NAME
    ) {
      return `Имя пользователя должно быть не меньше ${ValidValue.MIN_USER_NAME} и не больше ${ValidValue.MAX_USER_NAME}`;
    }

    if (
      password.length < ValidValue.MIN_PASSWORD ||
      password.length > ValidValue.MAX_PASSWORD
    ) {
      return `Пароль должно быть не меньше ${ValidValue.MIN_PASSWORD} и не больше ${ValidValue.MAX_PASSWORD}`;
    }

    return null;
  };

  const clearInput = () => {
    setUserName('');
    setPassword('');
    setError(null);
  };

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordMode = () => {
    setPasswordMode((prevState) => !prevState);
  };

  return {
    handleSubmitForm,
    handleChangeUserName,
    handleChangePassword,
    handleChangePasswordMode,
    userName,
    password,
    passwordMode,
    error,
  };
};
