// third party imports
import React, { useState} from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'

// my imports
import TopLayout from './components/wrappers/TopLayout'
import Navbar from './components/header/navbar/Navbar'
import { Routes } from './Routes'
import { lightTheme, darkTheme } from './styles/theme'

function App() {
  const [lightThemeActivated, setLightThemeActivated] = useState(true)

  const toggleTheme = () => {
    setLightThemeActivated(!lightThemeActivated)
  }

  // ~ COMPONENT
  return (
    <ThemeProvider theme={lightThemeActivated ? lightTheme : darkTheme}>
      <TopLayout>
        <Navbar
          toggleTheme={toggleTheme}
          lightThemeActivated={lightThemeActivated}
        />
        <MainContentContainerStyled>
          <Routes />
        </MainContentContainerStyled>
      </TopLayout>
    </ThemeProvider>
  )
}

export default App

// STYLING
const MainContentContainerStyled = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1024px;
`
