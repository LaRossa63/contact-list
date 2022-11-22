import React, { ChangeEvent, useState, FormEvent } from 'react';

export const useFormSignUp = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMode, setPasswordMode] = useState(false);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('submit');
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
  };
};
