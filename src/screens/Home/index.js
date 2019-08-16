import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { handleLoginAction } from '../../redux/auth';

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
    marginBottom: theme.spacing.unit * 2
  },
  backButton: {
    textTransform: 'none',
    fontSize: 18,
    width: '200px',
    marginBottom: 20
  }
}));

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