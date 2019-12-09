import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import ApolloClient from "apollo-boost";

import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
