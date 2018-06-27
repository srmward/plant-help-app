import React from 'react'
import { COLORS } from '../../theme'
import { Query } from 'react-apollo'
import { client } from '../../graphql.config'
import gql from 'graphql-tag'
import PlantShowcase from './PlantShowcase'

const styles = {
  color: COLORS.PRIMARY,
}

export default () => (
  <Query
    style={{ ...styles }}
    query={gql`
      {
        plants {
          name
          description
          image
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <div>
          {data.plants.map((plant, i) => (
            <div key={i}>
              <PlantShowcase data={plant} />
            </div>
          ))}
        </div>
      )
    }}
  </Query>
)
