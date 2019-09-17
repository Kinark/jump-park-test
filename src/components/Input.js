import styled, { css } from 'styled-components'

import colors from '~/constants/colors';

export const InputBase = css`
   border-radius: 4px;
   height: 24px;
   border: solid 2px ${colors.DARK_BLUE};
   margin: 1rem;
   outline: none;
`

const Input = styled.input`
   ${InputBase};
   text-align: center;
`

export default Input
