import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorPage, LoginPage, HomePage } from './pages';

const GlobalStyle = createGlobalStyle`
  body {
    padding :0;
    margin : 0;
    box-sizing : border-box;
  }
`;

const PAGE_NOT_FOUND: string = '유효하지 않은 페이지 입니다.';
const AppRouter: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" exact={true} component={() => <ErrorPage message={PAGE_NOT_FOUND} />} />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
