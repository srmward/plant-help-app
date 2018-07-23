import React from 'react'
import { Query } from 'react-apollo'
import { baseStyles, plantCardWrapperStyles, cardStyles } from './styles'
import gql from 'graphql-tag'
import PlantShowcase from './PlantShowcase'

//TODO: Grab image as proper size
export default () => (
  <Query
    css={baseStyles}
    query={gql`
      {
        plants {
          name
          description
          images {
            url
            size
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>{console.log(error)}</p>

      return (
        <div css={plantCardWrapperStyles}>
          {data.plants.map((plant, i) => (
            <div key={i} css={cardStyles}>
              <PlantShowcase data={plant} />
            </div>
          ))}
        </div>
      )
    }}
  </Query>
)
