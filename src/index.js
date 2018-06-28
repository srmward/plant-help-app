import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import { client } from './graphql.config'

const target = document.getElementById('root')

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  target
)
