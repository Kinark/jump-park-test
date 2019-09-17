/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { MdKeyboardArrowDown } from 'react-icons/md'

import downloadObjectAsJson from '~/utils/downloadObjectAsJson'
import colors from '~/constants/colors'
import { fetchSessionsLog } from '~/redux/actions/sessionsLog'

import Button from '~/components/Button'
import Card from '~/components/Card'
import Input from '~/components/Input'
import Container from '~/components/Container'
import { Table, THead, TBody, Tr, Th, Td } from '~/components/Table'

const Home = ({ dispatch, data, loading, error, offlineMode }) => {
   const [search, setSearch] = useState('')
   const [redirect, setRedirect] = useState(false)
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

   const logout = () => {
      localStorage.removeItem('userId')
      setRedirect(true)
   }

   const closeDropdown = () => {
      setIsDropdownOpen(false)
      document.removeEventListener('click', closeDropdown)
   }

   useEffect(() => {
      if (isDropdownOpen) document.addEventListener('click', closeDropdown)
   }, [isDropdownOpen])

   useEffect(() => {
      dispatch(fetchSessionsLog())
      return () => window.removeEventListener('click', () => closeDropdown)
   }, [])

   const handleKeyDown = e => {
      if (e.key === 'Enter') {
         console.log(`Currently searching for "${search}"`)
      }
   }

   const exportData = format => {
      console.log(`Download file in ${format}`)
      downloadObjectAsJson(data, 'Registro-de-sessões')
   }

   const searchPattern = new RegExp(`${search}`, 'i')
   const transformedData = search ? data.filter(user => searchPattern.test(user.userName)) : data

   if (redirect) return <Redirect to="/login" />
   return (
      <Container>
         <StyledCard>
            <CardActions>
               <div>
                  <DropdownWrapper>
                     <Button noMrg onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        Exportar <DropdownArrow size="2.5rem" isdropdownopen={isDropdownOpen ? 1 : 0} />
                     </Button>
                     {isDropdownOpen && (
                        <Dropdown>
                           <Button onClick={() => exportData('JSON')}>JSON</Button>
                        </Dropdown>
                     )}
                  </DropdownWrapper>
                  <Button onClick={logout}>Sair</Button>
               </div>
               <div>
                  {offlineMode && <OfflineMsg>Não conseguimos contatar a API. Você está no modo offline.</OfflineMsg>}
                  <Input type="text" placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
               </div>
            </CardActions>
            {!!error && error}
            {loading ? (
               <LoaderWrapper>
                  <ClimbingBoxLoader sizeUnit="px" size={15} color={colors.DARK_BLUE} loading={loading} />
                  <h3>Carregando...</h3>
               </LoaderWrapper>
            ) : (
               <Table>
                  <THead>
                     <Tr>
                        <Th>Operador</Th>
                        <Th>Abertura de sessão</Th>
                        <Th>Fechamento de sessão</Th>
                     </Tr>
                  </THead>
                  <TBody>
                     {transformedData.map(({ userName, startDateTime, endDateTime }, i) => (
                        <Tr key={`weak-key-${i}`}>
                           <Td>{userName}</Td>
                           <Td>{moment(startDateTime, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY (HH[h]mm)')}</Td>
                           <Td>{moment(endDateTime, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY (HH[h]mm)')}</Td>
                        </Tr>
                     ))}
                  </TBody>
               </Table>
            )}
         </StyledCard>
      </Container>
   )
}

Home.propTypes = {
   dispatch: PropTypes.func.isRequired,
   data: PropTypes.arrayOf(
      PropTypes.shape({
         userName: PropTypes.string.isRequired,
         sessionId: PropTypes.number.isRequired,
         startDateTime: PropTypes.string.isRequired,
         endDateTime: PropTypes.string.isRequired,
         userId: PropTypes.number.isRequired,
         establishmentId: PropTypes.number.isRequired,
         created_at: PropTypes.string.isRequired,
         updated_at: PropTypes.string.isRequired
      })
   ).isRequired,
   loading: PropTypes.bool.isRequired,
   error: PropTypes.string.isRequired,
   offlineMode: PropTypes.bool.isRequired
}

const mapStateToProps = ({ sessionsLog }) => ({
   data: sessionsLog.data,
   loading: sessionsLog.loading,
   error: sessionsLog.error,
   offlineMode: sessionsLog.offlineMode
})
export default connect(mapStateToProps)(Home)

const OfflineMsg = styled.span`
   color: red;
   font-style: italic;
   font-size: 1.25rem;
`

const DropdownArrow = styled(MdKeyboardArrowDown)`
   transform: rotate(${({ isdropdownopen }) => (isdropdownopen ? 180 : 0)}deg);
   transition: transform 150ms ease-out;
`

const DropdownWrapper = styled.div`
   position: relative;
   display: inline-block;
`

const Dropdown = styled.div`
   position: absolute;
   top: 3rem;
   left: 0;
   width: 100%;
   button {
      margin: 0.1rem;
      width: 100%;
   }
`

const CardActions = styled.div`
   position: sticky;
   top: 0;
   background-color: white;
   border-bottom: solid 1px ${colors.DARK_BLUE};
   padding: 2rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const StyledCard = styled(Card)`
   margin-top: 10rem;
`

const LoaderWrapper = styled.div`
   padding: 10rem 0;
   text-align: center;
   & > div {
      margin: auto;
   }
`
