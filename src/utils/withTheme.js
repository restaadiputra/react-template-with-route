import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  },
  typography: {
    useNextVariant: true
  }
});

const withTheme = (Component) => {
  const withRoot = (props) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );

  return withRoot;
};

export default withTheme;