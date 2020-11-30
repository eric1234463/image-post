import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import LoginPage from './pages/LoginPage';
import { theme } from './utils/styled';
import configureStore from './application/store/configureStore';
import createApi from './utils/createApi';

const App: React.FC = () => {
  const api = createApi();
  const store = configureStore({
    context: {
      api,
    },
  });
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>

        <Router>
          <Route path="/" component={LoginPage} />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App;
