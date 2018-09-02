import React from 'react'
import { modalStyles, ghStyles, srcContainerStyles } from '../styles'
import about from '..'
import gh from '../../common/icons/gh.png'

export default ({ handleAboutDisplay }) => (
  <div css={modalStyles} onClick={() => handleAboutDisplay()}>
    <p>life demands attention, plants included.</p>
    <p>an offering of tools for support and exploration.</p>
    <p>&copy; sward 2018</p>
    <div css={srcContainerStyles}>
      <img css={ghStyles} src={gh} />
      <a href="https://github.co/srmward/plant-help-app" target="_blank">
        source
      </a>
    </div>
    <p>select anywhere to close</p>
  </div>
)
