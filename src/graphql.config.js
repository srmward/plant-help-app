import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://plant-help-graphql.uc.r.appspot.com/',
  // uri: 'http://localhost:4000',
})
