import React from 'react'
import styled from 'styled-components'

import colors from '~/constants/colors'

import Container from '~/components/Container'

const Footer = () => (
   <FooterWrapper>
      <Container>Todos os direitos reservados a Jump Tecnologia | 2019 ©</Container>
   </FooterWrapper>
)

const FooterWrapper = styled.footer`
   font-size: 1.8rem;
   color: #c5c5c6;
   text-align: center;
   padding: 8rem 0;
`

export default Footer
