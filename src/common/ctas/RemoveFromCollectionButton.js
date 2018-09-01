import React, { Component } from 'react'
import { secondaryCTAStyles } from './styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Snackbar from '../snackbar'

const REMOVE_PLANT_FROM_COLLECTION = gql`
  mutation removeUserPlant($email: String!, $plantName: String!) {
    removeUserPlant(email: $email, plantName: $plantName) {
      id
      email
    }
  }
`

export default class RemoveFromCollectionButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Mutation mutation={REMOVE_PLANT_FROM_COLLECTION}>
        {(removeUserPlant, { data, error }) => {
          {
            data && setTimeout(() => window.location.reload(), 3000)
          }
          return (
            <div>
              {error && (
                <Snackbar msg="There was an issue removing the plant from your collection." />
              )}
              {data && (
                <Snackbar
                  msg={`Successfully removed ${
                    this.props.plantName
                  } from collection.`}
                />
              )}
              <button
                css={secondaryCTAStyles}
                onClick={() => {
                  removeUserPlant({
                    variables: {
                      email: this.props.email,
                      plantName: this.props.plantName,
                    },
                  })
                }}
              >
                remove from collection
              </button>
            </div>
          )
        }}
      </Mutation>
    )
  }
}
