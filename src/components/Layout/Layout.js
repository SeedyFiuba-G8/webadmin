import { makeStyles } from '@material-ui/styles';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Projects from '../../controllers/Projects';
import Users from '../../controllers/Users';
import Sidebar from '../SideBar/Sidebar';

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
                            path='/app'
                            render={() => <Redirect to='/app/projects' />}
                        />
                        <Route path='/app/projects' component={Projects} />
                        <Route path='/app/users' component={Users} />
                        {/* Default */}
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
