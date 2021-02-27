import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrgChart from './OrgChart';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './utils/theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <OrgChart />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
