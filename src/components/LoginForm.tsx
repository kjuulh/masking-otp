import React, { FormEvent, useState } from 'react';
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';

interface Props {}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm: React.FC<Props> = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === 'test@test.com' && password === 'password') {
      history.push('/2ndfactor');
    } else {
      alert('Email and password was incorrect');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={submit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
