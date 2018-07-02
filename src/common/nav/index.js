import React from 'react'
import { Link } from 'react-router-dom'
import navStyles from './styles'

export default () => (
  <nav>
    <div css={navStyles}>
      <Link to="/">Plant Help.</Link>
      <Link to="/join">join</Link>
      <Link to="/login">log in</Link>
      <Link to="/water-table">water table</Link>
      <Link to="/identify">identify</Link>
    </div>
  </nav>
)
