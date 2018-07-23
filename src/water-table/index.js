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
            exposure
            repot
            frequency
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
          <h1>Water Table</h1>
          <hr />
          {data.users[0].plants.length ? (
            <div>
              {data.users[0].plants.map((p, i) => (
                <div key={i}>
                  <h4>{p.name}</h4>
                  <p>Light exposure: {p.exposure}</p>
                  <p>Water frequency: {p.frequency}</p>
                  {p.repot && <p>Repot: {p.repot}</p>}
                </div>
              ))}
            </div>
          ) : (
            'You have no plants.'
          )}
        </div>
      )
    }}
  </Query>
)
