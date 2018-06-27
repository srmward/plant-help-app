import React from 'react'
import { COLORS } from '../theme'
import PlantShowcaseList from './components/PlantShowcaseList'
import { Link } from 'react-router-dom'

const styles = {
  color: COLORS.PRIMARY,
}

export default () => (
  <div>
    <h1>Welcome to Plant Help.</h1>
    <Link to="/join">Join</Link>
    <PlantShowcaseList />
  </div>
)
