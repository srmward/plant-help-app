import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <Link to="/">Plant Help.</Link>
    <Link to="/join">join</Link>
    <Link to="/login">log in</Link>
    <Link to="/water-table">water table</Link>
    <Link to="/identify">identify</Link>
  </div>
)
