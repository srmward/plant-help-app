import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

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
          {
            error && alert('error')
          }
          {
            data && alert('plant added')
          }
          return (
            <button
              onClick={() =>
                updateUser({
                  variables: {
                    email: this.props.email,
                    plantName: this.props.plantName,
                  },
                })
              }
            >
              add to collection
            </button>
          )
        }}
      </Mutation>
    )
  }
}
