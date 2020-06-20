import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import '../../styles/standardInject.scss'
import { UserProvider } from '../../contexts/UserContext'

const TopLayout = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  )
}

// STYLING

export default TopLayout
