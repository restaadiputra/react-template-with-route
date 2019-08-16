import React, { useCallback } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { handleLogoutAction } from '../../redux/auth';
import useStyles from '../../utils/useStyles';

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