import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { handleLoginAction } from '../../redux/auth';
import useStyles from '../../utils/useStyles';

const HomeScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (token = 'access_token') => dispatch(handleLoginAction(token)),
    [dispatch]
  );

  return (
    <Grid container className={classes.container}>
      <Typography variant='h1'>This is Home Screen</Typography>
      <Typography variant='h5' className={classes.textRow}>Go to private or public address using button bellow!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item>
              <ButtonGroup size="large" aria-label="Small outlined button group">
                <Button
                  variant='contained'
                  color='secondary'
                  component={Link}
                  to='/public'
                  size='medium'
                  className={classes.backButton}
                >
                  Go to Public
              </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  size='medium'
                  onClick={() => handleLogin()}
                  className={classes.backButton}
                >
                  Log Me In
            </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default HomeScreen;