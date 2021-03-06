import {ThemeProvider} from 'styled-components';
import React from 'react';
import theme from './styles/theme';

import Routes from './Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
