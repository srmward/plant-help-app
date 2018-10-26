import React from 'react'
import { joinButtonStyles } from './styles'
import { Link } from 'react-router-dom'

export default () => (
  <Link to="/join">
    <button css={joinButtonStyles}>view more</button>
  </Link>
)
