import styled from 'styled-components'

const ResponsiveImg = styled.img`
   width: 100%;
   max-width: ${({ maxWidth }) => maxWidth}px;
`
