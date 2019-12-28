import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/Index';
import LoginPage from './pages/Login';
import ErrorPage from './pages/Error';

const GlobalStyle = createGlobalStyle`
  body {
    padding :0;
    margin : 0;
    box-sizing : border-box;
  }
`;

const PAGE_NOT_FOUND: string = '유효하지 않은 페이지 입니다.';
const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='*' exact={true} component={() => <ErrorPage message={PAGE_NOT_FOUND} />} />
      </Switch>
    </Router>
  </>
);

export default App;
