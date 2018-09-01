import React, { Component } from 'react'
import { primaryCTAStyles } from './styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Snackbar from '../snackbar'

const ADD_PLANT_TO_COLLECTION = gql`
  mutation updateUser($email: String!, $plantName: String!) {
    updateUser(email: $email, plants: { name: $plantName }) {
      id
      email
    }
  }
`

export default class AddToCollectionButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Mutation mutation={ADD_PLANT_TO_COLLECTION}>
        {(updateUser, { data, error }) => {
          return (
            <div>
              {error && (
                <Snackbar
                  msg={`Error adding ${
                    this.props.plantName
                  } to your collection.`}
                />
              )}
              {data && (
                <Snackbar
                  msg={`Added ${this.props.plantName} to your collection.`}
                />
              )}
              <button
                css={primaryCTAStyles}
                onClick={() => {
                  updateUser({
                    variables: {
                      email: this.props.email,
                      plantName: this.props.plantName,
                    },
                  })
                }}
              >
                add to collection
              </button>
            </div>
          )
        }}
      </Mutation>
    )
  }
}
