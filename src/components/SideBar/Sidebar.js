import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List } from '@material-ui/core';
import {
    BorderAll as TableIcon,
    ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import SidebarLink from './SidebarLink';

import {
    useLayoutState,
    useLayoutDispatch,
    toggleSidebar,
} from '../../context/LayoutContext';

const drawerWidth = 240;

const structure = [
    { id: 0, laber: 'Projects', link: '/app/projects', icon: <TableIcon /> },
];

function Sidebar({ location }) {
    var classes = getStyles();
    var theme = useTheme();

    // global
    var { isSidebarOpened } = useLayoutState();
    var layoutDispatch = useLayoutDispatch();

    // local
    var [isPermanent, setPermanent] = useState(true);

    useEffect(function () {
        window.addEventListener('resize', handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? 'permanent' : 'temporary'}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(
                                classes.headerIcon,
                                classes.headerIconCollapse
                            ),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map((link) => (
                    <SidebarLink
                        key={link.id}
                        location={location}
                        isSidebarOpened={isSidebarOpened}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );

    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

const getStyles = makeStyles((theme) => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 40,
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
        },
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    mobileBackButton: {
        marginTop: theme.spacing(0.5),
        marginLeft: 18,
        [theme.breakpoints.only('sm')]: {
            marginTop: theme.spacing(0.625),
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default withRouter(Sidebar);
