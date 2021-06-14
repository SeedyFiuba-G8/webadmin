import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './controllers/Login';
import Error from './controllers/Error';
import Layout from './components/Layout/Layout';
import { useUserState } from './context/UserContext';
// import Users from './controllers/Users';

export default function App() {
    var { isAuthenticated } = useUserState();

    return (
        <HashRouter>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to='/app' />} />
                <PrivateRoute path={'/app'} component={Layout} />
                <PublicRoute path={'/login'} component={Login} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    );

    function PrivateRoute({ component, ...rest }) {
        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        React.createElement(component, props)
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            />
        );
    }

    function PublicRoute({ component, ...rest }) {
        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        React.createElement(component, props)
                    )
                }
            />
        );
    }
}
