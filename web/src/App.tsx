import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/home';
import LoginPage from './pages/login';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
