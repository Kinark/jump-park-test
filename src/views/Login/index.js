import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { Metas } from '~/components/Metas'
import Input from '~/components/Input'
import Button from '~/components/Button'
import Card from '~/components/Card'
import ResponsiveImg from '~/components/ResponsiveImg'

import myPassword from './images/my-password.svg'

export default () => {
   const [userId, setUserId] = useState('')
   const [redirect, setRedirect] = useState(false)

   const doLogin = e => {
      e.preventDefault()
      localStorage.setItem('userId', userId)
      setRedirect(true)
   }

   if (localStorage.getItem('userId') || redirect) return <Redirect to="/" />

   return (
      <VerticalAligner>
         <Metas title="Login - Jump Park Test" />
         <StyledCard>
            <ResponsiveImg src={myPassword} maxWidth="275" alt="Login Image" />
            <h3>Insira o ID do usuário</h3>
            <p>Insira um número diferente de 1 para ver o modo offline.</p>
            <StyledForm onSubmit={doLogin}>
               <Input required type="number" placeholder="ID do usuário (1)" value={userId} onChange={e => setUserId(e.target.value)} />
               <Button type="submit">Entrar</Button>
            </StyledForm>
         </StyledCard>
      </VerticalAligner>
   )
}

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
`

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;
   padding: 2rem;
   text-align: center;
   width: 90%;;
   max-width: 320px;
`

const VerticalAligner = styled.div`
   height: 100vh;
   overflow: auto;
   justify-content: center;
   align-items: center;
   display: flex;
   flex-direction: column;
`
