import styled, { css } from 'styled-components'

import colors from '~/constants/colors'

export const ButtonBase = css`
   border-radius: 4px;
   height: 24px;
   line-height: 25px;
   background-color: ${colors.GREEN};
   color: #fff;
   text-align: center;
   padding: 0 1.8rem;
   border: none;
   cursor: pointer;
   opacity: 1;
   transition: opacity 300ms ease-out;
   outline: none;
   margin: 1rem;
   &:hover {
      opacity: 0.75;
   }
`

const Button = styled.button`
   ${ButtonBase};
`

export default Button
