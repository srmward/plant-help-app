import React, { Component } from 'react'
import {
  formStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
} from '../../common/styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SUBSCRIBE_USER_TO_NEWSLETTER = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email)
  }
`
export default class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }
  handleChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  //TODO create snackbar that notifies signup success/failure
  render() {
    return (
      <Mutation mutation={SUBSCRIBE_USER_TO_NEWSLETTER}>
        {(subscribe, { data, error }) => {
          return (
            <form
              css={formStyles}
              onSubmit={e => {
                e.preventDefault()
                subscribe({
                  variables: {
                    email: this.state.email,
                  },
                })
              }}
            >
              <label css={labelStyles}>email</label>
              <input
                css={inputStyles}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <button css={buttonStyles} type="submit">
                email me
              </button>
            </form>
          )
        }}
      </Mutation>
    )
  }
}
