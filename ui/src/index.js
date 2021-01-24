import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
