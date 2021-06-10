import {
  Grid,
  makeStyles,
  Fade,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../assets/seedyfiuba-logo.png';

import { useUserDispatch, loginFunction } from '../context/UserContext';

function Login(props) {
  var classes = getStyles();

  var userDispatch = useUserDispatch();

  var [isLoading, setIsLoading] = useState(false);
  var [passwordValue, setPasswordValue] = useState('');
  var [loginValue, setLoginValue] = useState('');
  var [error, setError] = useState(null);

  return (
    <Grid container className={classes.container}>
      <div className={classes.formContainer}>
        <div className={classes.logotypeContainer}>
          <img src={logo} alt='logo' className={classes.logotypeImage} />
          <Typography className={classes.logotypeText}>
            {/* nombre */}
          </Typography>
        </div>
        <div className={classes.form}>
          <Fade in={error}>
            <Typography color='secondary' className={classes.errorMessage}>
              Something is wrong with your login or password :(
            </Typography>
          </Fade>
          <TextField
            id='email'
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            margin='normal'
            placeholder='Email Adress'
            type='email'
            fullWidth
          />
          <TextField
            id='password'
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            margin='normal'
            placeholder='Password'
            type='password'
            fullWidth
          />
        </div>
        <div className={classes.formButtons}>
          {isLoading ? (
            <CircularProgress size={26} className={classes.loginLoader} />
          ) : (
            <Button
              disabled={loginValue.length === 0 || passwordValue.length === 0}
              onClick={() =>
                loginFunction(
                  userDispatch,
                  loginValue,
                  passwordValue,
                  props.history.push,
                  setIsLoading,
                  setError
                )
              }
              variant='contained'
              color='primary'
              size='large'
            >
              Login
            </Button>
          )}
          <Button color='primary' size='large' className={classes.forgetButton}>
            Not admin?
          </Button>
        </div>
      </div>
    </Grid>
  );
}

const getStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    width: 'auto',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      width: '40%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  formContainer: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
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
  formButtons: {
    width: '30%',
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetButton: {
    textTransform: 'none',
    fontWeight: 400,
  },
}));

export default withRouter(Login);
