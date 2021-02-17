import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { client } from "./apollo";
import { ApolloProvider } from "@apollo/client";
//import Test from './Test'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
