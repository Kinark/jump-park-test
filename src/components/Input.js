import styled, { css } from 'styled-components'

import colors from '~/constants/colors'

export const InputBase = css`
   border-radius: 4px;
   height: 24px;
   border: solid 2px ${colors.DARK_BLUE};
   margin: 1rem;
   outline: none;
   &::placeholder {
      font-style: italic;
      color: #CBD0D5;
   }
`

const Input = styled.input`
   ${InputBase};
   text-align: center;
`

export default Input
