import React, { useState, FormEvent } from 'react';
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './SecondFactorForm.scss';

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

interface Props {}

const SecondFactorForm: React.FC<Props> = () => {
  const classes = useStyles();
  const history = useHistory();

  const [otp, setOtp] = useState<string>('');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp) {
      alert(otp);
      history.push('/dashboard');
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
            className='otp'
            id='otp'
            label='One time password'
            name='One time password'
            autoComplete='new-password'
            autoFocus
            type='text'
            onChange={(e) => setOtp(e.target.value)}
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

export default SecondFactorForm;
