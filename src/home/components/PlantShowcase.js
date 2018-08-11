import React from 'react'
import {cardImageStyles, cardTitleStyles, cardGraphStyles} from './styles'
import AddToCollectionButton from '../../common/ctas/AddToCollectionButton'
import Cookies from 'js-cookie'

export default ({data}) => (
  <div>
    <p css={cardTitleStyles}>{data.name}</p>
    <img
      src={data.images.length ? data.images[0].url : ''}
      alt={data.name}
      css={cardImageStyles}
    />
    <p css={cardGraphStyles}>{data.description}</p>
    <AddToCollectionButton email={Cookies.get('email')} plantName={data.name} />
  </div>
)
