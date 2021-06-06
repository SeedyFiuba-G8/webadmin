import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './themes/default';
import { ThemeProvider } from '@material-ui/styles';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById('root')
);
