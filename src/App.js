import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './controllers/Login';
import Error from './controllers/Error';
import Projects from './controllers/Projects';
// import Users from './controllers/Users';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={'/'} render={() => <Redirect to='/login' />} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/projects'} component={Projects} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}
