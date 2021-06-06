import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Themes from './themes';
import { ThemeProvider } from '@material-ui/styles';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
    <LayoutProvider>
        <UserProvider>
            <ThemeProvider theme={Themes.default}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </UserProvider>
    </LayoutProvider>,
    document.getElementById('root')
);
