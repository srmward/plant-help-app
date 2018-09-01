import React, { Component } from 'react'
import { primaryCTAStyles } from './styles'
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

  handleData = () => {
    alert('plant added to collection')
  }

  render() {
    return (
      <Mutation mutation={ADD_PLANT_TO_COLLECTION}>
        {(updateUser, { data, error }) => {
          {
            error && alert('error')
          }
          {
            data && this.handleData()
          }
          return (
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
          )
        }}
      </Mutation>
    )
  }
}
