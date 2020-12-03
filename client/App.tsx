import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled, { theme } from './utils/styled';
import configureStore from './application/store/configureStore';
import createApi from './utils/createApi';
import LoadingPage from './pages/LoadingPage';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostListingPage from './pages/PostListingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  margin: auto;
  width: 1024px;
  height: 60vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
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
            <Suspense fallback={<LoadingPage />}>
              <Switch>
                <Route path="/users/sign_in" exact component={LoginPage} />
                <Route path="/users/sign_up" exact component={SignupPage} />
                <Route path="/posts" exact component={PostListingPage} />
              </Switch>
              <div id="modal-root"></div>
            </Suspense>
          </Router>
        </Container>
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App;
