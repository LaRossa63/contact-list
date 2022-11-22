import React, { ChangeEvent, useState, FormEvent } from 'react';

export const useFormSignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMode, setPasswordMode] = useState(false);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('submit');
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
  };
};
