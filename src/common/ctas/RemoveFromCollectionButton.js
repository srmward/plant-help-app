import React, { Component } from 'react'
import { secondaryCTAStyles } from './styles'
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

  handleData = () => {
    alert('plant removed from collection')
    window.location.reload()
  }

  render() {
    return (
      <Mutation mutation={REMOVE_PLANT_FROM_COLLECTION}>
        {(removeUserPlant, { data, error }) => {
          {
            error && alert('error')
          }
          {
            data && this.handleData()
          }
          return (
            <button
              css={secondaryCTAStyles}
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
