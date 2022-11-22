import React, { FC } from 'react';
import { IconButton, InputAdornment } from '@mui/material';

import { Input } from 'components/Elements';
import { PasswordOff, PasswordOn } from 'images/Icon';

interface Props {
  handleChangePasswordMode: () => void;
  handleChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordMode: boolean;
  value: string;
}

export const InputPassword: FC<Props> = ({
  handleChangePasswordMode,
  handleChangePassword,
  passwordMode,
  value,
}) => {
  return (
    <>
      <Input
        placeholder="***************"
        type={passwordMode ? 'text' : 'password'}
        value={value}
        onChange={handleChangePassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleChangePasswordMode} sx={{ mb: 2 }}>
              {passwordMode ? <PasswordOn /> : <PasswordOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};
