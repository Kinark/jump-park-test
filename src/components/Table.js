import styled from 'styled-components'

import colors from '~/constants/colors'

export const Table = styled.table`
   width: 100%;
   text-align: center;
   border-spacing: 0;
`

export const Tr = styled.tr``

export const THead = styled.thead`
   background-color: ${colors.DARK_BLUE};
   color: white;
`

export const Th = styled.th`
   padding: 2rem;
`

export const TBody = styled.tbody`
   tr {
      transition: background-color 150ms ease-out, box-shadow 150ms ease-out;
   }
   tr:hover {
      background-color: ${colors.BEIGE};
      box-shadow: 0px 3px 3px 0px rgba(30, 81, 104, 0.1);
   }
`

export const Td = styled.td`
   border-top: solid 1px ${colors.LIGHT_BLUE};
   padding: 2rem;
`
