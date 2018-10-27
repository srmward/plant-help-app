import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'
import Join from '../join'
import Login from '../login'
import Nav from '../common/nav'
import WaterTable from '../water-table'
import Identify from '../identify'
import appStyles, { mainContentHide, mainContentShow } from './styles'
import { mobileMenuLink } from '../common/nav/styles'
import { AuthProvider } from '../common/contexts/AuthContext'
import ProtectedRoute from '../common/ProtectedRoute'
import AboutModal from '../about'

class App extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = e => {
    e.preventDefault()
    this.setState({ showMenu: !this.state.showMenu })
  }

  resetWindow = () => {
    document.body.scrollTo(0, 0)
    return null
  }

  render() {
    let { showMenu } = this.state
    return (
      <div css={appStyles}>
        <AuthProvider>
          <div css={mobileMenuLink} onClick={this.toggleMenu}>
            {showMenu ? 'close' : 'menu'}
          </div>
          <Nav
            showMenu={showMenu}
            onClick={() => this.setState({ showMenu: false })}
          />
          <div css={showMenu ? mainContentHide : mainContentShow}>
            <Route path="/" component={this.resetWindow} />
            <Route exact path="/" component={Home} />
            <Route path="/join" component={Join} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/water-table" component={WaterTable} />
            <ProtectedRoute path="/identify" component={Identify} />
          </div>
        </AuthProvider>
        <AboutModal />
      </div>
    )
  }
}

export default withRouter(App)
