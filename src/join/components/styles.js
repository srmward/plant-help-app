import { css } from 'emotion'
import { MEDIA, COLORS } from '../../theme'

export const formStyles = css`
  display: flex;
  flex-direction: column;
  ${MEDIA.TABLET_UP} {
    max-width: 50%;
  }
`

export const inputStyles = css`
  height: 3rem;
  margin-bottom: 30px;
  border-style: none;
  border: 1px solid ${COLORS.ACCENT};
`
