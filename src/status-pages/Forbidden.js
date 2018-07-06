import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    You don't have access to this page. Please <Link to="/login">log in</Link>to
    view.
  </div>
)
