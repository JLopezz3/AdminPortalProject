import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import { auth } from './firebaseSDK';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    background: "rgb(176 113 41)",
    opacity: "0.9",
    color: 'white',
    "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            backgroundColor: '#000000',
            opacity: "0.9",
        },
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#000000",
    opacity: "0.9",
    color: 'white',
    "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            backgroundColor: 'rgb(176 113 41)'
        },
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={signIn}
          >
            Sign In
          </Button>
          
          <Grid container>
            
            <Grid item>
              {/* <Link to="/" onClick={register} variant="body2">
                {"Click Here to Create Admin Profile"}
              </Link> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={register}
              >
                Click Here to Create Admin Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}