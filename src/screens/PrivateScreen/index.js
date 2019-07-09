import React, { useCallback } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { handleLogoutAction } from '../../redux/auth';

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
    <Grid container className={classes.constainer}>
      <Typography variant='h1'>This is Private Screen</Typography>
      <Typography variant='h5' className={classes.textRow}>Go to home again using button bellow!</Typography>
      <Button
        variant='contained'
        color='secondary'
        size='medium'
        onClick={() => handleLogout()}
        className={classes.backButton}
      >
        Logout Me!
      </Button>
    </Grid>
  )
};

export default PrivateScreen;