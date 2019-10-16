import React from 'react';
import ApolloClient from "apollo-boost";

const ApolloClientConfig = new ApolloClient({
    uri: "https://graphiql-test.netlify.com"
  });

export default ApolloClientConfig;