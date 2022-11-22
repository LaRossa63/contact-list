import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from 'api';
import { BaseStyled } from 'theme/BaseStyled';
import { Theme } from 'theme/Theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <BaseStyled>{children} </BaseStyled>
        </ThemeProvider>
      </BrowserRouter>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
