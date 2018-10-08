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
  orStyles,
  fbButtonStyles,
} from '../../common/styles'
import { LAYOUT_STYLES } from '../../theme'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Cookies from 'js-cookie'

const LOG_IN = gql`
  mutation login(
    $email: String!
    $password: String
    $name: String
    $fbUserId: String
  ) {
    login(
      email: $email
      password: $password
      name: $name
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

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    let input = ''

    return (
      <Mutation mutation={LOG_IN}>
        {(login, { data, error }) => (
          <div css={LAYOUT_STYLES}>
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
                    <div css={orStyles}>or</div>
                    <FacebookLogin
                      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={r => this.responseFacebook(r, login)}
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

export default LoginForm
