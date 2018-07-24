import { css } from 'emotion'
import {MEDIA} from '../theme'

export default css`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${MEDIA.TABLET_UP} {
    grid-template-columns: 300px 1fr;
  }
`
