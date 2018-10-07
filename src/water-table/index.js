import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthConsumer } from '../common/contexts/AuthContext'
import RemoveFromCollectionButton from '../common/ctas/RemoveFromCollectionButton'
import Cookies from 'js-cookie'
import {
  waterTableLayoutStyles,
  waterTableHeadlineStyles,
  waterTableImageStyles,
  waterTableDataText,
  waterTableDataContainerStyles,
} from './styles'

// TODO Handle display of images based on request, build query that allows fetching of user
// data with image size arg
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
                    images {
                      url
                      size
                    }
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
                <div css={waterTableLayoutStyles}>
                  <h1 css={waterTableHeadlineStyles}>water table</h1>
                  {data.users[0].plants.length ? (
                    <div>
                      {data.users[0].plants.map((p, i) => (
                        <div key={i} css={waterTableDataContainerStyles}>
                          <h4>{p.name}</h4>
                          <img
                            css={waterTableImageStyles}
                            src={p.images[0].url}
                          />
                          <p css={waterTableDataText}>
                            light exposure: {p.exposure}
                          </p>
                          <p css={waterTableDataText}>
                            water frequency: {p.frequency}
                          </p>
                          {p.repot && (
                            <p css={waterTableDataText}>repot: {p.repot}</p>
                          )}
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
