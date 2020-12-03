import React from 'react';
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../client/utils/styled';

export const renderStyledComponent = ({ Component, props }: { Component: React.FC<any>, props: any }) =>
  render(
    <ThemeProvider theme={theme}>
      <Component {...props }/>
    </ThemeProvider>
  );
