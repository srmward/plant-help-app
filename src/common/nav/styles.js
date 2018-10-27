import { css } from 'emotion'
import { COLORS, MEDIA, TRANSITION_TIMINGS, FADEIN } from '../../theme'

export const navStyles = css`
  color: ${COLORS.PRIMARY};
  display: grid;
  font-weight: bold;
  list-style-type: none;
  text-decoration: none;
  grid-auto-flow: row;
  ${MEDIA.TABLET_UP} {
    position: fixed;
    min-height: 50vh;
    font-size: 1.2rem;
    grid-template-columns: 1fr;
    padding-left: 1rem;
  }
  ${MEDIA.TABLET_DOWN} {
    position: fixed;
  }
`

export const mobileMenuLink = css`
  z-index: 9999;
  display: block;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  position: fixed;
  color: ${COLORS.SECONDARY};
  right: 2.5rem;
  top: 16px;
  ${MEDIA.TABLET_UP} {
    display: none;
  }
`

export const navLogoStyles = css`
  color: blue;
  position: fixed;
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  transform-origin: center bottom;
`

export const navLinkStyles = css`
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  cursor: pointer;
  :visited {
    color: ${COLORS.PRIMARY};
  }
  :hover {
    color: ${COLORS.SECONDARY};
  }
`

export const navShowStyles = css`
  ${navLinkStyles};
  display: block;
  font-size: 2.5rem;
  animation: ${FADEIN} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
  ${MEDIA.TABLET_DOWN} {
    margin-top: 7rem;
  }
`

export const navHideStyles = css`
  ${navLinkStyles};
  display: none;
  ${MEDIA.TABLET_UP} {
    display: block;
  }
`
