import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://plant-help-graphql-uurgdagxyl.now.sh',
  // uri: 'http://localhost:4000',
})
