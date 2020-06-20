// 3rd party imports
import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import styled from 'styled-components'

// My imports
import { Typography } from '@material-ui/core'
import UserCard from '../components/account/UserCard'

const Account = () => {
  const { user} = useContext(UserContext)
  document.title = 'Reddit Royale | Account'
  return (
    <PageWrapper>
      {user ? <UserCard user={user} /> : <Typography>User Cannot be loaded. Perhaps try logging out and in again</Typography>}
    </PageWrapper>
  )
}

export default Account

// STYLING
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`