import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import Input from '~/components/Input'
import Button from '~/components/Button'
import Card from '~/components/Card'
import ResponsiveImg from '~/components/ResponsiveImg'

import myPassword from './images/my-password.svg'

export default () => {
   const [userId, setUserId] = useState('')
   const [redirect, setRedirect] = useState(false)

   const doLogin = () => {
      localStorage.setItem('userId', userId)
      setRedirect(true)
   }

   if (localStorage.getItem('userId') || redirect) return <Redirect to="/" />

   return (
      <StyledCard>
         <ResponsiveImg src={myPassword} maxWidth="275" alt="Login Image" />
         <h3>Insira o ID do usuário</h3>
         <Input type="number" placeholder="ID do usuário (1)" value={userId} onChange={e => setUserId(e.target.value)} />
         <Button onClick={doLogin}>Entrar</Button>
      </StyledCard>
   )
}

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;
   padding: 2rem;
   text-align: center;
`
