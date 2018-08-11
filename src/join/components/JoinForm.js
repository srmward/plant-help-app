import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {Redirect} from 'react-router'
import AuthCookieSetter from '../../common/auth-cookie-setter'
import {
  formStyles,
  inputStyles,
  buttonStyles,
  headingStyles,
  errorStyles,
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
        {(signup, {data, error}) => (
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
              {error && (
                <p css={errorStyles}>Invalid Credentials. Please try again.</p>
              )}
              <label>name</label>
              <input
                css={inputStyles}
                name="name"
                onChange={this.handleChange}
                required
              />
              <label>email</label>
              <input
                css={inputStyles}
                name="email"
                onChange={this.handleChange}
                required
              />
              <label>password</label>
              <input
                css={inputStyles}
                type="password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <button css={buttonStyles} type="submit">
                sign up
              </button>
            </form>
            {data && <AuthCookieSetter token={data.signup.token} email={data.signup.user.email} />}
          </div>
        )}
      </Mutation>
    )
  }
}

export default JoinForm
