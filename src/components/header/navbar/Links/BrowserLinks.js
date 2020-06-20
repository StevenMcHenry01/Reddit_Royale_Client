// 3rd party imports
import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'

// My imports
import BrowserLinkActive from './BrowserLinkActive'
import { UserContext } from '../../../../contexts/UserContext'

const BrowserLinks = () => {
  const { user } = useContext(UserContext)

  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          <BrowserLinkActive to='/'>
            <Typography>Home</Typography>
          </BrowserLinkActive>
          <BrowserLinkActive to='/sub-royale'>
            <Typography>Subreddit Royale</Typography>
          </BrowserLinkActive>
          <BrowserLinkActive to='/top-subs'>
            <Typography>Top Subreddits</Typography>
          </BrowserLinkActive>
          <BrowserLinkActive to='/account'>
            <Typography>Account</Typography>
          </BrowserLinkActive>
          <BrowserLinkActive to='/logout'>
            <Typography>Logout</Typography>
          </BrowserLinkActive>
        </React.Fragment>
      ) : (
        <BrowserLinkActive to='/login'>
          <Typography>Login</Typography>
        </BrowserLinkActive>
      )}
    </React.Fragment>
  )
}

export default BrowserLinks
