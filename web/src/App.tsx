import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/Index';
import LoginPage from './pages/Login';
import ErrorPage from './pages/Error';

const PAGE_NOT_FOUND = '유효하지 않은 페이지 입니다.';
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='*' exact={true} component={() => <ErrorPage message={PAGE_NOT_FOUND} />} />
    </Switch>
  </Router>
);

export default App;
