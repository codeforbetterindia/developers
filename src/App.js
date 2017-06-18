
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRoutes from './components/AppRoutes';

const App = () => (
  <MuiThemeProvider>
    <AppRoutes />
  </MuiThemeProvider>
);

export default App;
