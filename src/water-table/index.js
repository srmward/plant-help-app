import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthConsumer } from '../common/contexts/AuthContext'
import RemoveFromCollectionButton from '../common/ctas/RemoveFromCollectionButton'
import Cookies from 'js-cookie'

export default () => (
  <div>
    <AuthConsumer>
      {({ email }) => {
        return (
          <Query
            query={gql`
              query Users($email: String!) {
                users(email: $email) {
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
            variables={{ email }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>{console.log('error')}</p>

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
                          <RemoveFromCollectionButton
                            email={Cookies.get('email')}
                            plantName={p.name}
                          />
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
      }}
    </AuthConsumer>
  </div>
)
