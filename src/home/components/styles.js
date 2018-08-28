import { css } from 'emotion'
import { COLORS, MEDIA } from '../../theme'

const MARGIN_SIZE = '80px'

const MARGIN_BOTTOM = '1.5rem'

const MAX_WIDTH_DESKTOP = '750px'

export const baseStyles = css`
  color: ${COLORS.PRIMARY};
`

export const cardImageContainerStyles = css`
  max-width: 100%;
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
  ${MEDIA.TABLET_UP} {
    max-width: ${MAX_WIDTH_DESKTOP};
    margin-bottom: ${MARGIN_BOTTOM / 2};
  }
`

export const cardGraphStyles = css`
  line-height: 2rem;
`
