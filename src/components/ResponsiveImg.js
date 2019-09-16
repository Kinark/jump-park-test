import styled from 'styled-components'

const ResponsiveImg = styled.img`
   width: ${({ maxWidth }) => maxWidth}px;
   max-width: 100%;
`

export default ResponsiveImg
