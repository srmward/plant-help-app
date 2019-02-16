import { css } from 'emotion'
import {
  COLORS,
  MEDIA,
  TRANSITION_TIMINGS,
  FADEIN,
  FADEOUT,
  FADEUPANDIN,
} from '../../theme'

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
  visibility: hidden;
  animation: ${FADEIN} 0.5s 0.25s ${TRANSITION_TIMINGS.CUBIC} forwards;
  ${MEDIA.TABLET_UP} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`

export const cardTitleStyles = css`
  margin-bottom: ${MARGIN_BOTTOM};
  ${MEDIA.TABLET_UP} {
    visibility: hidden;
  }
`

export const cardTitleShowStyles = css`
  ${cardTitleStyles};
  ${MEDIA.TABLET_UP} {
    visibility: hidden;
    animation: ${FADEIN} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
  }
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
  ${MEDIA.TABLET_UP} {
    visibility: hidden;
  }
`

export const showCardGraphStyles = css`
  ${cardGraphStyles};
  ${MEDIA.TABLET_UP} {
    animation: ${FADEIN} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
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

export const signUpButtonStyles = css`
  display: flex;
  justify-content: center;
  > * {
    margin-bottom: 10rem;
  }
  flex-direction: column;
  ${MEDIA.TABLET_UP} {
    animation: ${FADEOUT} 0.25s ${TRANSITION_TIMINGS.CUBIC} forwards;
    margin-right: 5rem;
  }
`

export const signUpButtonShowStyles = css`
  ${signUpButtonStyles};
  ${MEDIA.TABLET_UP} {
    animation: ${FADEIN} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
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

export const buttonContainerShowStyles = css`
  ${MEDIA.TABLET_UP} {
    animation: ${FADEUPANDIN} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
    visibility: visible;
  }
`

export const buttonContainerHideStyles = css`
  ${MEDIA.TABLET_UP} {
    animation: ${FADEOUT} 0.5s ${TRANSITION_TIMINGS.CUBIC} forwards;
    visibility: hidden;
  }
`

export const joinGraph = css`
  line-height: 1.5rem;
  color: ${COLORS.PRIMARY};
  margin: 0;
  width: 95%;
  font-size: 0.8rem;
  ${MEDIA.TABLET_UP} {
    margin-left: 2rem;
    font-size: 1rem;
    margin-top: -10rem;
    margin-right: 15rem;
  }
`
