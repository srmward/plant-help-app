import React from 'react'
import { secondaryCTAStyles } from './styles'
import { Link } from 'react-router-dom'

export default () => (
  <Link to="/join">
    <button css={secondaryCTAStyles}>view more</button>
  </Link>
)
