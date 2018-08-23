import { css } from 'emotion'
import { COLORS, TRANSITION_TIMINGS } from '../../theme'

export const ctaStyles = css`
  padding: 0.25rem 1rem;
  border: 1px solid;
  cursor: pointer;
  outline: 0;
`

export const primaryCTAStyles = css`
  ${ctaStyles}
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  border-color: ${COLORS.ACCENT};
  color: ${COLORS.ACCENT};
  :hover {
    border-color: ${COLORS.ACCENT_HIGHLIGHT};
    color: ${COLORS.ACCENT_HIGHLIGHT};
  :active {
    transform: translateY(0.1rem)
  }
  }
`

export const secondaryCTAStyles = css`
  ${ctaStyles}
  border-color: ${COLORS.SECONDARY}
`
