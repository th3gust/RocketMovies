import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from './routes'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import GlobalStyles from "./Styles/global"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
