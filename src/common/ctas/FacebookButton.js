import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = ({ email, name, id }, cb) => {
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

export default props => (
  <FacebookLogin
    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
    autoLoad={true}
    disableMobileRedirect={true}
    fields="name,email,picture"
    callback={r => responseFacebook(r, props.cb)}
    render={props.render}
  />
)
