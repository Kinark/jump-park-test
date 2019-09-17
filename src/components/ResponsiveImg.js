import styled from 'styled-components'

const ResponsiveImg = styled.img`
   width: ${({ maxWidth }) => maxWidth}px;
   max-width: 100%;
   display: block;
   margin: auto;
`

export default ResponsiveImg
