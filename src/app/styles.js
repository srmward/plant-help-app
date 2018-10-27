import { css } from 'emotion'
import { MEDIA } from '../theme'

export default css`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${MEDIA.TABLET_UP} {
    grid-template-columns: 180px 1fr;
  }
`

export const mainContentStyles = css`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 2.5rem;
  ${MEDIA.TABLET_UP} {
    margin-top: 1rem;
    margin-left: 2.5rem;
    width: 100%;
  }
  ${MEDIA.DESKTOP_UP} {
    margin-left: 4rem;
  }
`

export const mainContentShow = css`
  ${mainContentStyles};
  display: block;
  opacity: 1;
`

export const mainContentHide = css`
  ${mainContentStyles};
  display: none;
  opacity: 1;
`
