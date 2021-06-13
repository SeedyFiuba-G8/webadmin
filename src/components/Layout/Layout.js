import { makeStyles } from '@material-ui/styles';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useLayoutState } from '../../context/LayoutContext';
import Projects from '../../controllers/Projects';
import Sidebar from '../SideBar/Sidebar';
import classnames from 'classnames';

function Layout(props) {
    var classes = getStyles();
    var layoutState = useLayoutState();

    return (
        <div classNmae={classes.root}>
            <>
                <Sidebar />
                <div
                    className={classnames(classes.content, {
                        [classes.contentShift]: layoutState.isSidebarOpened,
                    })}
                >
                    <Switch>
                        <Route path="/app/projects" component={Projects} />
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
    contentShift: {
        width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

export default withRouter(Layout);
