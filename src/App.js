import { hot } from 'react-hot-loader/root'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'

import colors from '~/constants/colors'

import { Metas } from '~/components/Metas'
import Favicon from '~/components/Favicon'
import AppRoutes from '~/components/AppRoutes'

import ARLRDBD_0 from '~/fonts/ARLRDBD_0.woff'

const App = () => (
   <BrowserRouter>
      <GlobalStyle />
      <Metas title="Sample Website" description="" />
      <Favicon />
      <AppRoutes />
   </BrowserRouter>
)

const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'Arial Rounded MT Bold';
      font-style: normal;
      font-weight: normal;
      src: local('Arial Rounded MT Bold'), url('${ARLRDBD_0}') format('woff');
   }
   html {
      font-family: 'Arial Rounded MT Bold';
   }
   body {
      background-color: ${colors.BG};
   }
`

export default hot(App)
