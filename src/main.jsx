import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { Globalstyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Globalstyle />
    </ThemeProvider>
  </React.StrictMode>,
)
