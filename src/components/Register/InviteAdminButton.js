import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PersonAdd as PersonAddIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import registerHandler from '../Register/registerHandler';

export default function InviteAdmin() {
    const classes = getStyles();
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [sucessOpen, setSuccessOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleErrorClose = () => {
        setErrorOpen(false);
    };

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
                startIcon={<PersonAddIcon />}
                // position to define
                style={{
                    alignSelf: 'flex-start',
                    position: 'absolute',
                    bottom: 70,
                }}
            >
                Invite Admin
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="Invitation"
            >
                <DialogTitle id="Invitation">
                    Register new admin account{' '}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To invite a new admin to this website, please enter the
                        email address and password here.
                    </DialogContentText>
                    <TextField
                        id="email"
                        InputProps={{
                            classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                            },
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        placeholder="Email Adress"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        InputProps={{
                            classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                            },
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        placeholder="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        disabled={email.length === 0 || password.length === 0}
                        onClick={() =>
                            registerHandler(
                                email,
                                password,
                                setErrorOpen,
                                setSuccessOpen,
                                setPassword,
                                setEmail,
                                setError
                            )
                        }
                        color="primary"
                    >
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
            <div>
                <Dialog
                    open={sucessOpen}
                    onClose={handleSuccessClose}
                    aria-labelledby="Success"
                >
                    <DialogTitle>Success</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Register Successful
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSuccessClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={errorOpen}
                    onClose={handleErrorClose}
                    aria-labelledby="error"
                >
                    <DialogTitle>
                        Error: {error.status}-{error.name}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Error: {error.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleErrorClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

const getStyles = makeStyles((theme) => ({
    textFieldUnderline: {
        '&:before': {
            borderBottomColor: theme.palette.primary.light,
        },
        '&:after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '&:hover:before': {
            borderBottomColor: `${theme.palette.primary.light} !important`,
        },
    },
    textField: {
        borderBottomColor: theme.palette.background.light,
    },
}));
