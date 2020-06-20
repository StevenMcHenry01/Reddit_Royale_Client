// 3rd party imports
import React, { useState } from 'react'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar'
import '@rmwc/top-app-bar/styles'
import { Typography, useTheme, Fab, Drawer } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { NavLink } from 'react-router-dom'

// Icon Imports
import HighlightIcon from '@material-ui/icons/Highlight'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import MenuIcon from '@material-ui/icons/Menu'

// My imports
import BrowserLinks from './Links/BrowserLinks'
import MobileLinks from './Links/MobileLinks'

const Navbar = ({ toggleTheme, lightThemeActivated }) => {
  const theme = useTheme()
  const windowWidth = useWindowWidth({ wait: 75 })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <React.Fragment>
      <TopAppBar style={{ backgroundColor: theme.palette.common.darkGrey }}>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>
              <NavLink to='/' style={{textDecoration: 'none'}}>
                <Typography variant='h4' style={{ color: '#f0e5e5' }}>
                  Reddit Royale
                </Typography>
              </NavLink>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <ButtonStyled onClick={toggleTheme}>
              {lightThemeActivated ? (
                <HighlightIcon style={{ color: grey[400] }} />
              ) : (
                <EmojiObjectsIcon style={{ color: grey[400] }} />
              )}
            </ButtonStyled>
            {windowWidth > theme.breakpoints.values.sm && <BrowserLinks />}
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      {windowWidth <= theme.breakpoints.values.sm && (
        <React.Fragment>
          <FabStyled
            style={{
              backgroundColor: theme.palette.switchable.menuButtonBackground,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              style={{ color: theme.palette.switchable.menuButtonIcon }}
            />
          </FabStyled>
          <Drawer
            anchor='bottom'
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <MobileLinks handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Navbar

// STYLING

const ButtonStyled = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`

const FabStyled = styled(Fab)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`
