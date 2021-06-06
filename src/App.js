import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './controllers/Login';
import Error from './controllers/Error';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={'/'} render={() => <Redirect to='/login' />} />
        <Route exact path={'/login'} component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}
