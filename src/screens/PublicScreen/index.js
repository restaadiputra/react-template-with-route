import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from '../../utils/useStyles';

const PublicScreen = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Typography variant='h1'>This is Public Screen</Typography>
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

export default PublicScreen;