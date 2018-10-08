import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AuthConsumer } from '../../common/contexts/AuthContext'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import {
  formStyles,
  inputStyles,
  buttonStyles,
  headingStyles,
  labelStyles,
  errorStyles,
  orStyles,
  fbButtonStyles,
} from '../../common/styles'

const SIGN_UP = gql`
  mutation signup(
    $name: String!
    $email: String!
    $password: String
    $fbUserId: String
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      fbUserId: $fbUserId
    ) {
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

  responseFacebook = ({ email, name, id }, cb) => {
    if (!email) return
    let fbUser = {
      variables: {
        email,
        name,
        fbUserId: id,
      },
    }
    return cb(fbUser)
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
            <AuthConsumer>
              {({ handleAuth }) => {
                return (
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
                      <p css={errorStyles}>
                        Invalid Credentials. Please try again.
                      </p>
                    )}
                    <label css={labelStyles}>name</label>
                    <input
                      css={inputStyles}
                      name="name"
                      onChange={this.handleChange}
                      required
                    />
                    <label css={labelStyles}>email</label>
                    <input
                      css={inputStyles}
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                    <label css={labelStyles}>password</label>
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
                    <div css={orStyles}>or</div>
                    <FacebookLogin
                      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={r => this.responseFacebook(r, signup)}
                      render={renderProps => (
                        <div css={fbButtonStyles} onClick={renderProps.onClick}>
                          f | continue with facebook
                        </div>
                      )}
                    />
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

export default JoinForm
