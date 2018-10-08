import { css } from 'emotion'
import { MEDIA, COLORS, LAYOUT_STYLES } from '../../theme'

export const headingStyles = css`
  margin-bottom: 45px;
  color: ${COLORS.PRIMARY};
`

export const formStyles = css`
  display: flex;
  flex-direction: column;
  ${LAYOUT_STYLES};
`

export const inputStyles = css`
  height: 3rem;
  margin-bottom: 30px;
  padding-left: 8px;
  font-size: 16px;
  border-style: none;
  border: none;
`

export const labelStyles = css`
  margin-bottom: 0.5rem;
  color: ${COLORS.SECONDARY};
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

export const fbButtonStyles = css`
  background: none;
  border: none;
  margin: 0;
  width: 100%;
  cursor: pointer;
  background: white;
  border: 1px solid #3b5998;
  text-align: center;
  padding: 20px 0px;
  color: #3b5998;
  font-size: 0.8rem;
  :active {
    transform: translateY(0.1rem);
  }
  :hover {
    text-decoration: underline;
  }
`

export const orStyles = css`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 0.7rem;
  color: ${COLORS.SECONDARY};
`
