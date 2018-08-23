import { css } from 'emotion'
import { COLORS, MEDIA } from '../../theme'

export const navStyles = css`
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
  right: 3rem;
  top: 16px;
  ${MEDIA.TABLET_UP} {
    display: none;
  }
`

export const navLogoStyles = css`
  display: block;
  color: ${COLORS.PRIMARY};
`

export const navLinkStyles = css`
  display: none;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  :visited {
    color: ${COLORS.PRIMARY};
  }
  ${MEDIA.TABLET_UP} {
    display: block;
  }
`
