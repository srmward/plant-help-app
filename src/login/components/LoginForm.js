import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AuthConsumer } from '../../common/contexts/AuthContext'
import FacebookButton from '../../common/ctas/FacebookButton'
import { LAYOUT_STYLES } from '../../theme'
import {
  inputStyles,
  formStyles,
  buttonStyles,
  buttonLoadingStyles,
  headingStyles,
  errorStyles,
  labelStyles,
  orStyles,
  fbButtonStyles,
  fbButtonLoadingStyles,
  formWrapperStyles,
} from '../../common/styles'

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
  state = {
    email: '',
    password: '',
    isLoading: false,
  }

  handleChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    let input = ''
    let { isLoading } = this.state
    return (
      <Mutation mutation={LOG_IN}>
        {(login, { data, error }) => (
          <div css={formWrapperStyles}>
            <h1 css={headingStyles}>log in</h1>
            <AuthConsumer>
              {({ handleAuth }) => {
                return (
                  <div>
                    <p css={errorStyles}>
                      {error ? 'Invalid Credentials. Please try again.' : ''}
                    </p>
                    <form
                      css={formStyles}
                      onSubmit={e => {
                        e.preventDefault()
                        this.setState({ isLoading: true })
                        error = false
                        login({
                          variables: this.state,
                        })
                      }}
                    >
                      <label css={labelStyles}>email</label>
                      <input
                        css={inputStyles}
                        name="email"
                        disabled={isLoading && !error}
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
                        disabled={isLoading && !error}
                        onChange={this.handleChange}
                        ref={node => {
                          input = node
                        }}
                        required
                      />
                      <button
                        css={
                          isLoading && !error
                            ? buttonLoadingStyles
                            : buttonStyles
                        }
                        type="submit"
                      >
                        {isLoading && !error ? 'loading ...' : 'log in'}
                      </button>
                      <div css={orStyles}>or</div>
                      <FacebookButton
                        cb={login}
                        render={renderProps => (
                          <div
                            css={
                              isLoading && !error
                                ? fbButtonLoadingStyles
                                : fbButtonStyles
                            }
                            onClick={() => {
                              this.setState({ isLoading: true })
                              error = false
                              return renderProps.onClick()
                            }}
                          >
                            {isLoading && !error
                              ? 'loading...'
                              : 'f | continue with facebook'}
                          </div>
                        )}
                      />
                      {data && handleAuth(data)}
                    </form>
                  </div>
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
