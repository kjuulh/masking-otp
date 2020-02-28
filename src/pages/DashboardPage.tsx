import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import SuccessCard from '../components/SuccessCard';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const DashboardPage: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SuccessCard />
    </div>
  );
};

export default DashboardPage;
