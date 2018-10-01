import { css } from 'emotion'
import { COLORS, MEDIA, TRANSITION_TIMINGS } from '../../theme'

const MARGIN_SIZE = '80px'

const MARGIN_BOTTOM = '1.5rem'

const MAX_WIDTH_DESKTOP = '750px'

export const baseStyles = css`
  color: ${COLORS.PRIMARY};
`

export const cardImageContainerStyles = css`
  max-width: 100%;
  margin-bottom: 4rem;
`

export const cardStyles = css`
  ${cardImageContainerStyles};
  ${MEDIA.TABLET_UP} {
    flex: 0 0 auto;
    max-width: ${MAX_WIDTH_DESKTOP};
    margin: 50px ${MARGIN_SIZE};
  }
`

export const plantCardWrapperStyles = css`
  ${MEDIA.TABLET_UP} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`

export const cardTitleStyles = css`
  margin-bottom: ${MARGIN_BOTTOM};
`

export const cardImageStyles = css`
  max-width: 100%;
  margin-bottom: 1rem;
  ${MEDIA.TABLET_UP} {
    max-width: ${MAX_WIDTH_DESKTOP};
    margin-bottom: ${MARGIN_BOTTOM / 2};
  }
`

export const cardGraphStyles = css`
  line-height: 2rem;
  ${MEDIA.TABLET_DOWN} {
    display: none;
  }
`

export const cardGraphMobileActive = css`
  margin-top: 0;
  ${cardGraphStyles};
  ${MEDIA.TABLET_DOWN} {
    line-height: 1.4rem;
    font-size: 0.8rem;
    display: block;
  }
`

export const mobileExpandButtonStyles = css`
  font-size: 0.7rem;
  display: inline-block;
  transition: all 0.1s ${TRANSITION_TIMINGS.FLICKER};
  padding: 0.25rem 1rem;
  border: 1px solid;
  cursor: pointer;
  outline: 0;
  :active {
    transform: translateY(0.1rem);
  }
  border-color: ${COLORS.ACCENT};
  color: ${COLORS.ACCENT};
  :hover {
    border-color: ${COLORS.ACCENT_HIGHLIGHT};
    color: ${COLORS.ACCENT_HIGHLIGHT};
  }
  ${MEDIA.TABLET_UP} {
    display: none;
  }
`
