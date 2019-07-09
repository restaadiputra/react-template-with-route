import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
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
    marginBottom: theme.spacing.unit * 2
  },
  backButton: {
    textTransform: 'none',
    fontSize: 18,
    width: '200px'
  }
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.constainer}>
      <Typography variant='h1'>This is Home Screen</Typography>
      <Typography variant='h5' className={classes.textRow}>Go to private or public address using button bellow!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item>
              <ButtonGroup size="large" aria-label="Small outlined button group">
                <Button
                  variant='outlined'
                  color='primary'
                  component={Link}
                  to='/private'
                  size='medium'
                  className={classes.backButton}
                >
                  Go to Private
              </Button>
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
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              size='medium'
              className={classes.backButton}
            >
              Make Me Authenticated
            </Button>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default HomeScreen;