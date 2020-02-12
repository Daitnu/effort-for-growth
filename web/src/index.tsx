import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import AppRouter from './router';

const client = new ApolloClient({
  uri: 'http://localhost/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
  document.getElementById('root'),
);
