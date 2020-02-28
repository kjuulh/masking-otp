import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface Props {}

const SuccessCard: React.FC<Props> = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Congratulations
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            You've logged in
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => history.push('/')}>
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};

export default SuccessCard;
