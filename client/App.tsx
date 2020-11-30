import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={LoginPage} />
    </Router>
  )
}

export default App;
