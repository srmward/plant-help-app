import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router'
import CookieSetter from '../../common/cookie-setter'
import {
  formStyles,
  inputStyles,
  buttonStyles,
  headingStyles,
} from '../../common/styles'

const SIGN_UP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

class JoinForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <Mutation mutation={SIGN_UP}>
        {(signup, { data, error }) => (
          <div>
            <h1 css={headingStyles}>join</h1>
            <form
              css={formStyles}
              onSubmit={e => {
                e.preventDefault()
                signup({
                  variables: this.state,
                })
              }}
            >
              {error && <p>Invalid Credentials. Please try again.</p>}
              <label>name</label>
              <input
                css={inputStyles}
                name="name"
                onChange={this.handleChange}
              />
              <label>email</label>
              <input
                css={inputStyles}
                name="email"
                onChange={this.handleChange}
              />
              <label>password</label>
              <input
                css={inputStyles}
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <button css={buttonStyles} type="submit">
                sign up
              </button>
            </form>
            {data && <CookieSetter data={data.signup.token} />}
            {data && <Redirect to="/" />}
          </div>
        )}
      </Mutation>
    )
  }
}

export default JoinForm
