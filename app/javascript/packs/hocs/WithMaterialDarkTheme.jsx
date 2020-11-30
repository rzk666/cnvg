import React from 'react';
// Components
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

const WithMaterialDarkThemeHOC = (ComposedComponent) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: lightBlue,
    },
    overrides: {
      MuiButton: {
        root: {
          background: '#CC869D',
        },
      },
      MuiPaper: {
        root: {
          height: '100%',
          width: '100%',
        },
        rounded: {
          borderRadius: 0,
        },
      },
    },
  });
  const WithMaterialDarkTheme = (props) => (
    <ThemeProvider theme={theme}>
      <Paper>
        <ComposedComponent
          {...props}
        />
      </Paper>
    </ThemeProvider>
  );

  return WithMaterialDarkTheme;
};

export default WithMaterialDarkThemeHOC;
