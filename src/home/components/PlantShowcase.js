import React, { Component } from 'react'
import {
  cardImageStyles,
  cardTitleStyles,
  cardGraphStyles,
  showCardGraphStyles,
  cardTitleShowStyles,
  mobileExpandButtonStyles,
  cardGraphMobileActive,
  buttonContainerShowStyles,
  buttonContainerHideStyles,
  cardImageContainerStyles,
} from './styles'
import AddToCollectionButton from '../../common/ctas/AddToCollectionButton'
import Cookies from 'js-cookie'
import { AuthConsumer } from '../../common/contexts/AuthContext'

export default class PlantShowcase extends Component {
  state = {
    mobileShowGraph: false,
    desktopShowGraph: false,
  }
  toggleText = () =>
    this.setState({ mobileShowGraph: !this.state.mobileShowGraph })
  render() {
    let { data } = this.props
    let { mobileShowGraph, desktopShowGraph } = this.state
    return (
      <div
        css={cardImageContainerStyles}
        onMouseEnter={() => this.setState({ desktopShowGraph: true })}
        onMouseLeave={() => this.setState({ desktopShowGraph: false })}
      >
        <p css={desktopShowGraph ? cardTitleShowStyles : cardTitleStyles}>
          {data.name}
        </p>
        <img
          src={data.images.length ? data.images[0].url : ''}
          alt={data.name}
          css={cardImageStyles}
        />
        <p
          css={
            mobileShowGraph
              ? cardGraphMobileActive
              : desktopShowGraph
                ? showCardGraphStyles
                : cardGraphStyles
          }
        >
          {data.description}
        </p>
        <div css={mobileExpandButtonStyles} onClick={this.toggleText}>
          {mobileShowGraph ? 'show less' : 'show more'}
        </div>
        <AuthConsumer>
          {({ isAuth }) =>
            isAuth && (
              <div
                css={
                  desktopShowGraph
                    ? buttonContainerShowStyles
                    : buttonContainerHideStyles
                }
              >
                <AddToCollectionButton
                  email={Cookies.get('email')}
                  plantName={data.name}
                />
              </div>
            )
          }
        </AuthConsumer>
      </div>
    )
  }
}
