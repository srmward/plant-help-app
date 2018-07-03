import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router'
import CookieSetter from '../../common/cookie-setter'

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
            <h1>Log In</h1>
            <form
              onSubmit={e => {
                e.preventDefault()
                login({
                  variables: this.state,
                })
              }}
            >
              {error && <p>Invalid Credentials. Please try again.</p>}
              <input
                name="email"
                onChange={this.handleChange}
                ref={node => {
                  input = node
                }}
              />
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                ref={node => {
                  input = node
                }}
              />
              <button type="submit">Log In</button>
            </form>
            {data && <CookieSetter data={data.login.token} />}
            {data && <Redirect to="/" />}
          </div>
        )}
      </Mutation>
    )
  }
}

export default LoginForm
