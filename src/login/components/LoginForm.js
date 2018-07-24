import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router'
import CookieSetter from '../../common/cookie-setter'
import { AuthConsumer } from '../../common/contexts/AuthContext'
import {
  inputStyles,
  formStyles,
  buttonStyles,
  headingStyles,
} from '../../common/styles'

const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    let input = ''

    return (
      <Mutation mutation={LOG_IN}>
        {(login, { data, error }) => (
          <div>
            <h1 css={headingStyles}>log in</h1>
            <form
              css={formStyles}
              onSubmit={e => {
                e.preventDefault()
                login({
                  variables: this.state,
                })
              }}
            >
              {error && <p>Invalid Credentials. Please try again.</p>}
              <label>email</label>
              <input
                css={inputStyles}
                name="email"
                onChange={this.handleChange}
                ref={node => {
                  input = node
                }}
              />
              <label>password</label>
              <input
                css={inputStyles}
                type="password"
                name="password"
                onChange={this.handleChange}
                ref={node => {
                  input = node
                }}
              />
              <button css={buttonStyles} type="submit">
                log in
              </button>
            </form>
            <AuthConsumer>
              {({ login }) => {
                {
                  data && login()
                }
              }}
            </AuthConsumer>
            {data && <CookieSetter data={data.login.token} />}
            {data && <Redirect to="/" />}
          </div>
        )}
      </Mutation>
    )
  }
}

export default LoginForm
