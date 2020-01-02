import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { handleLogoutAction } from '../../redux/auth';

const useStyles = makeStyles((theme) => ({
  container: {
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
    fontSize: 18,
    width: '200px',
    marginBottom: 20
  }
}));

const PrivateScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = useCallback(
    () => dispatch(handleLogoutAction()),
    [dispatch]
  );

  return (
    <Grid container className={classes.container}>
      <Typography variant='h1'>This is Private Screen</Typography>
      <Typography variant='h5' className={classes.textRow}>Go to home again using button bellow!</Typography>
      <ButtonGroup size="large" aria-label="Small outlined button group">
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to='/not-found'
          size='medium'
          className={classes.backButton}
        >
          Go to Not Found
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='medium'
          onClick={() => handleLogout()}
          className={classes.backButton}
        >
          Logout Me!
        </Button>
      </ButtonGroup>
    </Grid>
  )
};

export default PrivateScreen;