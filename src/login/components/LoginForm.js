import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AuthConsumer } from '../../common/contexts/AuthContext'
import {
  inputStyles,
  formStyles,
  buttonStyles,
  headingStyles,
  errorStyles,
  labelStyles,
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
            <AuthConsumer>
              {({ handleAuth }) => {
                return (
                  <form
                    css={formStyles}
                    onSubmit={e => {
                      e.preventDefault()
                      login({
                        variables: this.state,
                      })
                    }}
                  >
                    {error && (
                      <p css={errorStyles}>
                        Invalid Credentials. Please try again.
                      </p>
                    )}
                    <label css={labelStyles}>email</label>
                    <input
                      css={inputStyles}
                      name="email"
                      onChange={this.handleChange}
                      ref={node => {
                        input = node
                      }}
                      required
                    />
                    <label css={labelStyles}>password</label>
                    <input
                      css={inputStyles}
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      ref={node => {
                        input = node
                      }}
                      required
                    />
                    <button css={buttonStyles} type="submit">
                      log in
                    </button>
                    {data && handleAuth(data)}
                  </form>
                )
              }}
            </AuthConsumer>
          </div>
        )}
      </Mutation>
    )
  }
}

export default LoginForm
