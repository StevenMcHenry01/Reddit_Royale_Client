// 3rd party imports
import React, { useContext } from 'react'
import {
  Typography,
  List,
  ListItem,
  Divider,
  useTheme,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../../../contexts/UserContext'

// My imports

const MobileLinks = ({ handleDrawerToggle }) => {
  const { user } = useContext(UserContext)
  const theme = useTheme()

  const MobileLinkStyle = {
    textDecoration: 'none',
    color: theme.palette.switchable.mobileLinkText,
  }

  return (
    <List>
      {user ? (
        <React.Fragment>
          <ListItemStyled onClick={handleDrawerToggle}>
            <NavLink style={MobileLinkStyle} to='/'>
              <Typography>Home</Typography>
            </NavLink>
          </ListItemStyled>
          <Divider />
          <ListItemStyled onClick={handleDrawerToggle}>
            <NavLink style={MobileLinkStyle} to='/sub-royale'>
              <Typography>Subreddit Royale</Typography>
            </NavLink>
          </ListItemStyled>
          <Divider />
          <ListItemStyled onClick={handleDrawerToggle}>
            <NavLink style={MobileLinkStyle} to='/top-subs'>
              <Typography>Top Subreddits</Typography>
            </NavLink>
          </ListItemStyled>
          <Divider />
          <ListItemStyled onClick={handleDrawerToggle}>
            <NavLink style={MobileLinkStyle} to='/account'>
              <Typography>Account</Typography>
            </NavLink>
          </ListItemStyled>
          <Divider />
          <ListItemStyled onClick={handleDrawerToggle}>
            <NavLink style={MobileLinkStyle} to='/logout'>
              <Typography>Logout</Typography>
            </NavLink>
          </ListItemStyled>
        </React.Fragment>
      ) : (
        <ListItemStyled onClick={handleDrawerToggle}>
          <NavLink style={MobileLinkStyle} to='/login'>
            <Typography>Login</Typography>
          </NavLink>
        </ListItemStyled>
      )}
    </List>
  )
}

export default MobileLinks

// STYLING
const ListItemStyled = styled(ListItem)`
  justify-content: center;
  cursor: pointer;
  margin: 1rem 0;
`
