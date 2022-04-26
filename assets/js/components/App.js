import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

export default function App(props) {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
}
