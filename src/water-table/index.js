import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

//TODO: Stop hard-coding my email, pass userId or email from token
export default () => (
  <Query
    query={gql`
      {
        users(email: "srmward@gmail.com") {
          name
          plants {
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>{console.log(error)}</p>

      return (
        <div>
          {console.log(data.users)}
          {data.users[0].plants.length ? (
            <ul>{data.users[0].plants.map(p => <li>{p.name}</li>)}</ul>
          ) : (
            'You have no plants.'
          )}
        </div>
      )
    }}
  </Query>
)
