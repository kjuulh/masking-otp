import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
  }),
);

const Navbar: React.FC<Props> = () => {
  const classes = useStyles();
  const router = useHistory();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          className={classes.title}
          onClick={() => router.push('/')}
        >
          Mask OTP
        </Typography>
        <Button color='inherit' onClick={() => router.push('/login')}>
          Login
        </Button>
        <Button color='inherit' onClick={() => router.push('/dashboard')}>
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
