import React, { Component } from 'react'
import AboutButton from './components/AboutButton'
import AboutModal from './components/AboutModal'

export default class About extends Component {
  state = {
    showAbout: false,
  }

  handleAboutDisplay = () => this.setState({ showAbout: !this.state.showAbout })

  render() {
    return this.state.showAbout ? (
      <AboutModal handleAboutDisplay={() => this.handleAboutDisplay()} />
    ) : (
      <AboutButton handleAboutDisplay={() => this.handleAboutDisplay()} />
    )
  }
}
