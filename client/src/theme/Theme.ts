import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  pallette: {
    common: {
      black: '#000',
      white: '#fff',
    },

    background: {
      default: '#F5F5F5',
      auth: '#1D283A',
      button: '#539713',
    },

    text: {
      primary: '#F1F2F1',
      secondary: '#7FAAF0',
      title: '#539713',
    },
  },

  typography: {
    fontFamily: "font-family: 'Montserrat', sans-serif;",

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    fontWeightBold: '700',
  },
};
