import { makeStyles } from '@material-ui/styles';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Projects from '../../controllers/Projects';
import Users from '../../controllers/Users';
import Sidebar from '../SideBar/Sidebar';
import Error from '../../controllers/Error';
import Project from '../../controllers/Project';
import User from '../../controllers/User';
import Services from '../../controllers/Services';

function Layout(props) {
    var classes = getStyles();

    return (
        <div className={classes.root}>
            <>
                <Sidebar />
                <div className={classes.content}>
                    <Switch>
                        <Route
                            exact
                            path="/app"
                            render={() => <Redirect to="/app/projects" />}
                        />
                        <Route
                            exact
                            path="/app/projects"
                            component={Projects}
                        />
                        <Route
                            exact
                            path="/app/projects/:id"
                            component={Project}
                        />
                        <Route exact path="/app/users" component={Users} />
                        <Route exact path="/app/users/:id" component={User} />
                        <Route
                            exact
                            path="/app/services"
                            component={Services}
                        />
                        {/* Default */}
                        <Route component={Error} />
                    </Switch>
                </div>
            </>
        </div>
    );
}
const getStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: `calc(100vw - 240px)`,
        minHeight: '100vh',
    },
}));

export default withRouter(Layout);
