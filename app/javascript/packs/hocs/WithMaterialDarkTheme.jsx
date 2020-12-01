import React from 'react';
// Components
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const WithMaterialDarkThemeHOC = (ComposedComponent) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#CC869D',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          background: '#CC869D',
        },
      },
      MuiAppBar: {
        root: {
          height: '52px;',
          backgroundColor: '#CC869D',
        },
      },
      MuiPaper: {
        root: {
          height: '100%',
          width: '100%',
        },
        rounded: {
          borderRadius: 15,
        },
        elevation1: {
          boxShadow: '0px 0px 74px 2px rgba(0,0,0,0.23)',
        },
      },
    },
  });
  const WithMaterialDarkTheme = (props) => (
    <ThemeProvider theme={theme}>
      <ComposedComponent
        {...props}
      />
    </ThemeProvider>
  );

  return WithMaterialDarkTheme;
};

export default WithMaterialDarkThemeHOC;
