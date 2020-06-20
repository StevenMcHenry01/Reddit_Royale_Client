// 3rd party imports
import React from 'react'
import { Button, Card, Typography, Link } from '@material-ui/core'
import styled from 'styled-components'
import queryString from 'query-string'

const Login = ({ location }) => {
  document.title = 'Reddit Royale | Login'
  const values = queryString.parse(location.search)

  return (
    <PageWrapper>
      {values.authorization === 'denied' && (
        <Typography variant='h6' color='primary'>
          It appears you denied access. We understand and appreciate your
          concern for privacy.
        </Typography>
      )}
      <StyledCard>
      <Typography variant='h6'>Hello!</Typography>
        <Typography variant='body2' style={{margin: '1rem 0'}}>
          This website requires the use of a reddit account. Please login below
          to gain full access. We will never post on your behalf or use your
          information for anything other than enhancing your experience on the
          site. Thank you
        </Typography>
        <Button
          variant='contained'
          color='primary'
          style={{ fontSize: '1rem' }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            href='http://localhost:8080/api/auth/reddit'
          >
            Login with reddit
          </Link>
        </Button>
      </StyledCard>
    </PageWrapper>
  )
}

export default Login

// STYLING
const StyledCard = styled(Card)`
  padding: 20px;
  max-width: 350px;
`

const PageWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
