import { css } from 'emotion'

export default css`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-style: italic;
  color: #aeaeae;
  cursor: pointer;
  :hover {
    color: #919191;
  }
`

export const modalStyles = css`
  z-index: 1000;
  background: red;
  color: black;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  cursor: not-allowed;
  text-align: center;
`
