import { css } from 'emotion'
import { COLORS } from '../../theme'

export const navStyles = css`
  position: fixed;
  display: grid;
  min-height: 50vh;
  font-weight: bold;
  font-size: 1.2rem;
  grid-template-columns: 1fr;
`
export const navLinkStyles = css`
  color: ${COLORS.PRIMARY};
  :visited {
    color: ${COLORS.PRIMARY};
  }
  cursor: pointer;
`
