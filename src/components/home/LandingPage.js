// 3rd party imports
import React from 'react'
import { Typography, Button, Link } from '@material-ui/core'
import styled from 'styled-components'
import Img from 'react-cool-img'

// My imports
import logo from '../../assets/images/logo.png'
import paint from '../../assets/images/paint.png'

const LandingPage = () => {
  return (
    <PageWrapper>
      <PaintBackground>
        <GreetingsText variant='h3'>Welcome to Reddit Royale!</GreetingsText>
      </PaintBackground>
      <LogoImg src={logo} alt='Reddit Logo with shield' />
      <Typography
        style={{ maxWidth: '60%', textAlign: 'center', margin: '2rem 0' }}
        variant='h5'
      >
        A toy website where one can pit subreddits against one another and find
        out who is on top!
      </Typography>
      <Button variant='contained' color='primary'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/StevenMcHenry01/Reddit_Royale_Client'
          style={{textDecoration: 'none', color: '#0f0f0f'}}
        >
          View On Github
        </a>
      </Button>
    </PageWrapper>
  )
}

export default LandingPage

// STYLING
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GreetingsText = styled(Typography)`
  text-align: center;
  font-weight: 700;
`

const PaintBackground = styled.div`
  width: 90%;
  background: url(${paint});
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-position: center;
`

const LogoImg = styled(Img)`
  margin-top: 2rem;
  max-width: 300px;
`
