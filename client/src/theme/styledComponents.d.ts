import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallette: {
      common: {
        black: string;
        white: string;
      };

      background: {
        default: string;
        button: string;
      };

      text: {
        primary: string;
        secondary: string;
      };
    };

    typography: {
      fontFamily: string;

      fontWeightLight: string;
      fontWeightRegular: string;
      fontWeightMedium: string;
      fontWeightBold: string;
    };
  }
}
