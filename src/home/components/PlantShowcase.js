import React, { Component } from 'react'
import {
  cardImageStyles,
  cardTitleStyles,
  cardGraphStyles,
  mobileExpandButtonStyles,
  cardGraphMobileActive,
  cardImageContainerStyles,
} from './styles'
import AddToCollectionButton from '../../common/ctas/AddToCollectionButton'
import Cookies from 'js-cookie'
import { AuthConsumer } from '../../common/contexts/AuthContext'

export default class PlantShowcase extends Component {
  state = {
    mobileShowGraph: false,
  }
  toggleText = () =>
    this.setState({ mobileShowGraph: !this.state.mobileShowGraph })
  render() {
    let { data } = this.props
    let { mobileShowGraph } = this.state
    return (
      <div css={cardImageContainerStyles}>
        <p css={cardTitleStyles}>{data.name}</p>
        <img
          src={data.images.length ? data.images[0].url : ''}
          alt={data.name}
          css={cardImageStyles}
        />
        <p css={mobileShowGraph ? cardGraphMobileActive : cardGraphStyles}>
          {data.description}
        </p>
        <div css={mobileExpandButtonStyles} onClick={this.toggleText}>
          {mobileShowGraph ? 'show less' : 'show more'}
        </div>
        <AuthConsumer>
          {({ isAuth }) =>
            isAuth && (
              <AddToCollectionButton
                email={Cookies.get('email')}
                plantName={data.name}
              />
            )
          }
        </AuthConsumer>
      </div>
    )
  }
}
