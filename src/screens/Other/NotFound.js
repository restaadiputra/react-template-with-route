import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  constainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: 0,
    left: 0,
    marginTop: 50
  },
  textRow: {
    marginBottom: theme.spacing(2)
  },
  backButton: {
    textTransform: 'none',
    fontSize: 18
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.constainer}>
      <Typography variant='h1'>404 Not Found</Typography>
      <Typography variant='h5' className={classes.textRow}>Go to home again using button bellow!</Typography>
      <Button
        variant='contained'
        color='secondary'
        component={Link}
        to='/'
        size='medium'
        className={classes.backButton}
      >
        Back to Home
      </Button>
    </Grid>
  )
};

export default NotFound;