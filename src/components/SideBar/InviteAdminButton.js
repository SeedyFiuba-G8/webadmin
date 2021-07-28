import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PersonAdd as PersonAddIcon } from '@material-ui/icons';

export default function InviteAdmin() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        autoFocus
                        margin="normal"
                        id="username"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="password"
                        label="Passowrd"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
