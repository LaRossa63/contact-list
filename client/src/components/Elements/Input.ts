import styled from 'styled-components';
import MuiInput from '@mui/material/Input';

export const Input = styled(MuiInput)`
  & .MuiInputBase-input {
    font-weight: ${(props) => props.theme.typography.fontWeightRegular};
    font-size: 16px;
    line-height: 155%;
    color: ${(props) => props.theme.pallette.common.white};
  }

  &::before {
    border-bottom: 1px solid ${(props) => props.theme.pallette.common.white} !important;
  }

  &::placeholder {
    opacity: 0.7;
  }
`;
