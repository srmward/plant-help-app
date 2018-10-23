import { css } from 'emotion'
import { MEDIA, COLORS, LAYOUT_STYLES } from '../../theme'

export const headingStyles = css`
  margin-bottom: 1rem;
  color: ${COLORS.PRIMARY};
`

export const formStyles = css`
  display: flex;
  flex-direction: column;
  ${LAYOUT_STYLES};
`

export const inputStyles = css`
  background: #ffffff;
  height: 3rem;
  margin-bottom: 30px;
  padding-left: 8px;
  font-size: 16px;
  border-style: none;
  border: none;
  :-webkit-autofill,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 100px white inset;
  }
  :disabled {
    color: ${COLORS.DISABLED_COLOR};
    background: ${COLORS.DISABLED_BG_COLOR};
  }
  :-webkit-autofill:disabled {
    -webkit-text-fill-color: ${COLORS.DISABLED_COLOR};
    -webkit-background-color: ${COLORS.DISABLED_BG_COLOR};
  }
`

export const labelStyles = css`
  margin-bottom: 0.5rem;
  color: ${COLORS.SECONDARY};
`

export const buttonStyles = css`
  height: 4rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  outline: 0;
  margin-top: 20px;
  background: white;
  border: 2px solid ${COLORS.PASTEL_BLUE};
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`

export const buttonLoadingStyles = css`
  ${buttonStyles};
  border: 2px solid ${COLORS.DISABLED_COLOR};
  color: ${COLORS.DISABLED_COLOR};
  cursor: default;
  :hover {
    text-decoration: none;
  }
`

export const errorStyles = css`
  color: ${COLORS.ERROR_RED};
  min-height: 1.2rem;
`

export const fbButtonStyles = css`
  outline: 0;
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

export const fbButtonLoadingStyles = css`
  ${fbButtonStyles};
  border: 2px solid ${COLORS.DISABLED_COLOR};
  color: ${COLORS.DISABLED_COLOR};
  cursor: default;
  :hover {
    text-decoration: none;
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

export const alreadyStyles = css`
  font-size: 0.8rem;
  margin: -4rem 0rem 5rem 0rem;
  color: ${COLORS.SECONDARY};
`
