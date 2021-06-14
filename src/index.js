import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Themes from './themes/default';
import { ThemeProvider } from '@material-ui/styles';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <UserProvider>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById('root')
);
