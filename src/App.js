import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from "react-apollo";
import ApolloClientConfig from "./config/ApolloClientConfig";
import FilmsResolver from './graphql/query/FilmsResolver';

const App = (client) => (
  
  <ApolloProvider client={ApolloClientConfig}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <FilmsResolver />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
