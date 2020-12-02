import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider , createGlobalStyle} from 'styled-components';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import styled, { theme } from './utils/styled';
import configureStore from './application/store/configureStore';
import createApi from './utils/createApi';


const Container = styled.div`
  margin: auto;
  width: 1024px;
  height: 60vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.PRIMARY_200};
    position: relative;
    font-size: 16px;
  }
`;
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
        <Container>
          <Router>
            <Route path="/users/sign_in" exact component={LoginPage} />
            <Route path="/users/sign_up" exact component={SignupPage} />
          </Router>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App;
