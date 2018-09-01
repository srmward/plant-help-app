import { css } from 'emotion'
import {
  COLORS,
  FADEUP,
  FADEDOWN,
  TRANSITION_TIMINGS,
  MEDIA,
} from '../../theme'

const sharedSnackbarStyles = css`
  position: fixed;
  bottom: 0rem;
  left: 1rem;
  z-index: 1;
  color: ${COLORS.OFFWHITE};
  background-color: ${COLORS.PRIMARY};
  padding: 8px 15px;
  ${MEDIA.TABLET_DOWN} {
    right: 1rem;
  }
`

export const showSnackbarStyles = css`
  ${sharedSnackbarStyles};
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  animation: ${FADEUP} 0.2s ${TRANSITION_TIMINGS.CUBIC} forwards;
`

export const hideSnackbarStyles = css`
  ${sharedSnackbarStyles};
  animation: ${FADEDOWN} 0.2s ${TRANSITION_TIMINGS.CUBIC} forwards;
`
export const closeStyles = css`
  cursor: pointer;
  color: ${COLORS.ACCENT};
  margin-left: 0.75rem;
  font-size: 0.75rem;
  display: inline-block;
`
