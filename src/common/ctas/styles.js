import { css } from 'emotion'
import { COLORS, TRANSITION_TIMINGS } from '../../theme'

export const ctaStyles = css`
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  padding: 0.25rem 1rem;
  border: 1px solid;
  cursor: pointer;
  outline: 0;
  :active {
    transform: translateY(0.1rem);
  }
`

export const primaryCTAStyles = css`
  ${ctaStyles}
  border-color: ${COLORS.ACCENT};
  color: ${COLORS.ACCENT};
  :hover {
    border-color: ${COLORS.ACCENT_HIGHLIGHT};
    color: ${COLORS.ACCENT_HIGHLIGHT};
  }
`

export const secondaryCTAStyles = css`
${ctaStyles}
border-color: ${COLORS.ERROR_RED};
color: ${COLORS.ERROR_RED};
:hover {
  border-color: ${COLORS.ERROR_HIGHLIGHT};
  color: ${COLORS.ERROR_HIGHLIGHT};

}
`
