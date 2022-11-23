import React, { ChangeEvent, useState, FormEvent } from 'react';

import { SignUpDto, ValidValue } from 'types/types';
import { useSignUp } from 'api/services/Auth';

interface ValidSignUpDto extends SignUpDto {
  passwordConfirm: string;
}

export const useFormSignUp = () => {
  const [fullName, setFullName] = useState('Maxim LaRossa');
  const [userName, setUserName] = useState('LaRossa63');
  const [password, setPassword] = useState('qwaszx123');
  const [passwordConfirm, setPasswordConfirm] = useState('qwaszx123');
  const [passwordMode, setPasswordMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync: sendData } = useSignUp(handleErrorResponse);

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: ValidSignUpDto = {
      fullName,
      userName,
      password,
      passwordConfirm,
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

  const validationFormSignUp = (user: ValidSignUpDto) => {
    const { fullName, userName, password, passwordConfirm } = user;

    if (
      fullName.length < ValidValue.MIN_FULL_NAME ||
      fullName.length > ValidValue.MAX_FULL_NAME
    ) {
      return `Полное имя должно быть не меньше ${ValidValue.MIN_FULL_NAME} и не больше ${ValidValue.MAX_FULL_NAME}`;
    }

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

    if (password !== passwordConfirm) {
      return `Пароли не совпадают`;
    }

    return null;
  };

  const clearInput = () => {
    setFullName('');
    setUserName('');
    setPassword('');
    setPasswordConfirm('');
    setError(null);
  };

  const handleChangeFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordConfirm = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const handleChangePasswordMode = () => {
    setPasswordMode((prevState) => !prevState);
  };

  return {
    handleSubmitForm,
    handleChangeFullName,
    handleChangeUserName,
    handleChangePassword,
    handleChangePasswordConfirm,
    handleChangePasswordMode,
    fullName,
    userName,
    password,
    passwordConfirm,
    passwordMode,
    error,
  };
};
