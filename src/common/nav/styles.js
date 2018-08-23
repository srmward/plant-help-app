import { css } from 'emotion'
import { COLORS, MEDIA, TRANSITION_TIMINGS } from '../../theme'

export const navStyles = css`
  color: ${COLORS.PRIMARY};
  display: grid;
  font-weight: bold;
  list-style-type: none;
  grid-auto-flow: row;
  ${MEDIA.TABLET_UP} {
    position: fixed;
    min-height: 50vh;
    font-size: 1.2rem;
    grid-template-columns: 1fr;
    padding-left: 1rem;
  }
`

export const mobileMenuLink = css`
  display: block;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  position: absolute;
  color: ${COLORS.SECONDARY};
  right: 2.5rem;
  top: 16px;
  ${MEDIA.TABLET_UP} {
    display: none;
  }
`

export const commonNavLinkStyles = css`
  :visited {
    color: ${COLORS.PRIMARY};
  }
`

export const navLogoStyles = css`
  color: blue;
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  display: block;
`

export const navLinkStyles = css`
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  display: none;
  cursor: pointer;
  ${commonNavLinkStyles};
  ${MEDIA.TABLET_UP} {
    display: block;
  }
  :hover {
    color: ${COLORS.SECONDARY};
  }
`
