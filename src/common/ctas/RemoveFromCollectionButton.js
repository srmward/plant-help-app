import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

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
            error && alert('error')
          }
          {
            data && alert('plant removed')
          }
          return (
            <button
              onClick={() => {
                console.log(this.props.plantName)
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
          )
        }}
      </Mutation>
    )
  }
}
