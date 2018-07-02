import { css } from 'emotion'

export default css`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 300px 1fr;
  }
`
