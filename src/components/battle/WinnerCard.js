// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, Button, Typography, Link } from '@material-ui/core'
import Img from 'react-cool-img'

// My imports
import defaultLogo from '../../assets/images/reddit_icon_black.jpg'

const shortenedDesc = (desc) => {
  if (desc.length > 100) {
    desc.slice(0, 99)
    desc = desc + '...'
    return desc
  }
  return desc
}

const WinnerCard = ({ results, handleTotalReset }) => {
  const {
    winner,
    totalScore,
    icon_img,
    public_description,
    subscribers,
    created,
  } = results

  const date = new Date(created)

  return (
    <Wrapper>
      <Typography style={{ marginBottom: '2rem' }} variant='h4'>
        ...and the Winner is!
      </Typography>
      <WinnerCardStyled>
        <CardContentStyled>
          <StyledImg src={icon_img || defaultLogo} alt='subreddit symbol' />
          <Typography variant='h6' color='primary' style={{ fontWeight: 700 }}>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.reddit.com/r/${winner}`}
            >
              /r/{winner}
            </Link>
          </Typography>
          <Typography>Score: {totalScore.toLocaleString()}</Typography>
          <Typography>Subscribers: {subscribers.toLocaleString()}</Typography>
          <Typography>Created on: {date.toLocaleDateString()}</Typography>
          <Typography style={{ maxWidth: '80%' }}>
            {public_description
              ? shortenedDesc(public_description)
              : 'no description given'}
          </Typography>
        </CardContentStyled>
      </WinnerCardStyled>
      <ButtonStyled
        variant='contained'
        color='primary'
        onClick={handleTotalReset}
      >
        RESET
      </ButtonStyled>
    </Wrapper>
  )
}

export default WinnerCard

// STYLING
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WinnerCardStyled = styled(Card)`
  width: 400px;
`

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImg = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const ButtonStyled = styled(Button)`
  font-size: 2rem;
  margin-top: 2rem;
`
