import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
  &.MuiButtonBase-root {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 155%;
    color: ${(props) => props.theme.pallette.common.white};

    padding: 9.5px 0;

    background-color: ${(props) =>
      props.theme.pallette.background.button} !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

    margin-top: 32px;
  }
`;
