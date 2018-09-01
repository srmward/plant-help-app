import { css } from 'emotion'
import { COLORS } from '../../theme'

const sharedSnackbarStyles = css`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  color: ${COLORS.OFFWHITE};
  background-color: ${COLORS.PRIMARY};
  padding: 8px 15px;
`

export const showSnackbarStyles = css`
  ${sharedSnackbarStyles};
  display: flex;
  align-items: center;
`

export const hideSnackbarStyles = css`
  ${sharedSnackbarStyles};
  display: none;
`
export const closeStyles = css`
  cursor: pointer;
  color: ${COLORS.ACCENT};
  margin-left: 0.75rem;
  font-size: 0.75rem;
  display: inline-block;
`
