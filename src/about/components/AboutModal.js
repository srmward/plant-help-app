import React from 'react'
import { modalStyles } from '../styles'
import about from '..'

export default ({ handleAboutDisplay }) => (
  <div css={modalStyles} onClick={() => handleAboutDisplay()}>
    life demands attention, plants included.
    <br />
    an offering of tools for support and exploration.
    <br />
    &copy; sward 2018
    <br />
    click anywhere to close
  </div>
)
