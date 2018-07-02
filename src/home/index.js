import React from 'react'
import { COLORS } from '../theme'
import PlantShowcaseList from './components/PlantShowcaseList'
import { Link } from 'react-router-dom'

const styles = {
  color: COLORS.PRIMARY,
}

export default () => (
  <div>
    <PlantShowcaseList />
  </div>
)
