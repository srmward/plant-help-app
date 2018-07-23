import { css } from 'emotion'
import { COLORS } from '../../theme'

const MARGIN_SIZE = '80px'

const MARGIN_BOTTOM = '1.4rem'

const MAX_WIDTH_DESKTOP = '750px'

export const baseStyles = css`
  color: ${COLORS.PRIMARY};
`

export const cardStyles = css`
  flex: 0 0 auto;
  max-width: ${MAX_WIDTH_DESKTOP};
  margin: 50px ${MARGIN_SIZE};
`
export const plantCardWrapperStyles = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

export const cardTitleStyles = css`
  margin-bottom: ${MARGIN_BOTTOM};
`

export const cardImageStyles = css`
  max-width: ${MAX_WIDTH_DESKTOP};
  margin-bottom: ${MARGIN_BOTTOM / 2};
`

export const cardGraphStyles = css`
  line-height: 2rem;
`
