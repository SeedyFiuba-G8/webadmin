import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './controllers/Login';
import Error from './controllers/Error';
import Layout from './components/Layout/Layout';
// import Users from './controllers/Users';

export default function App() {
    return (
        <HashRouter>
            <Switch>
                <Route
                    exact
                    path={'/'}
                    render={() => <Redirect to="/login" />}
                />
                {/* <Route
                    exact
                    path="/app"
                    render={() => <Redirect to="/app/projects" />}
                /> */}
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/app'} component={Layout} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    );
}
