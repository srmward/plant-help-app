import { css } from 'emotion'
import { MEDIA, COLORS } from '../../theme'

export const headingStyles = css`
  margin-bottom: 45px;
`

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
  padding-left: 8px;
  font-size: 16px;
  border-style: none;
  border: 1px solid ${COLORS.ACCENT};
`

export const buttonStyles = css`
  height: 4rem;
  margin-top: 20px;
  background: white;
  border: 2px solid ${COLORS.PASTEL_BLUE};
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`

export const errorStyles = css`
  color: ${COLORS.ERROR_RED};
`
