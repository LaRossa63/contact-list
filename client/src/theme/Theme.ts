import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  pallette: {
    common: {
      black: '#000',
      white: '#fff',
    },

    background: {
      default: '#1D283A',
      button: '#539713',
    },

    text: {
      primary: '#F1F2F1',
      secondary: '#7FAAF0',
    },
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif;",

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    fontWeightBold: '700',
  },
};
