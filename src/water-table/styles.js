import { css } from 'emotion'
import { LAYOUT_STYLES, MEDIA } from '../theme'
import { headingStyles } from '../common/styles'

export const waterTableHeadlineStyles = css`
  ${headingStyles};
  margin-bottom: 2.3rem;
`
export const waterTableLayoutStyles = css`
  ${LAYOUT_STYLES};
`
export const waterTableImageStyles = css`
  max-width: 300px;
`

export const waterTableDataContainerStyles = css`
  margin-bottom: 4.5rem;
`

export const waterTableDataText = css`
  ${MEDIA.TABLET_DOWN} {
    line-height: 1.4rem;
    font-size: 0.8rem;
    display: block;
  }
`
