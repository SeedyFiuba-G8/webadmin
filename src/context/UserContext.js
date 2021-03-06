import React from 'react';
import createSession from '../api/sessionApi';
import apiProvider from '../api/utilities/provider';

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true };
        case 'SIGN_OUT_SUCCESS':
            return { ...state, isAuthenticated: false };
        case 'LOGIN_FAILURE':
            return { ...state, isAuthenticated: false };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function UserProvider({ children }) {
    var [state, dispatch] = React.useReducer(userReducer, {
        isAuthenticated:
            !!localStorage.getItem('token') && !!localStorage.getItem('id'),
    });

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

function useUserState() {
    var context = React.useContext(UserStateContext);
    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }
    return context;
}

function useUserDispatch() {
    var context = React.useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider');
    }
    return context;
}

export { UserProvider, useUserState, useUserDispatch, loginFunction, signOut };

// ###########################################################

async function loginFunction(
    loginDispatch,
    email,
    password,
    redirect,
    setIsLoading,
    setError
) {
    setError(false);
    setIsLoading(true);

    var session = await createSession(email, password);

    if (session.loginSuccessful) {
        persistSession(session.id, session.token);
        setError(null);
        setIsLoading(false);
        loginDispatch({ type: 'LOGIN_SUCCESS' });

        redirect('/app');
    } else {
        loginDispatch({ type: 'LOGIN_FAILURE' });
        setError(true);
        setIsLoading(false);
    }
}

function persistSession(id, token) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    apiProvider.updateAuthToken();
}

function signOut(dispatch, history) {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    apiProvider.updateAuthToken();
    dispatch({ type: 'SIGN_OUT_SUCCESS' });
    history.push('/login');
}
