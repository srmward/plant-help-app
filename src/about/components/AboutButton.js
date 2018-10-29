import React from 'react'
import aboutStyles from '../styles'
import about from '..'

export default ({ handleAboutDisplay }) => (
  <div css={aboutStyles} id="infoBtn" onClick={() => handleAboutDisplay()}>
    ~info~
  </div>
)
