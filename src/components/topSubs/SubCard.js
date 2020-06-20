// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import Img from 'react-cool-img'
import defaultLogo from '../../assets/images/reddit_icon_black.jpg'
import { FaStar, FaCube } from 'react-icons/fa'

// My imports

const SubCard = ({ sub, index }) => {
  const {
    display_name_prefixed,
    icon_img,
    subscribers,
    advertiser_category
  } = sub
  return (
    <CardStyled>
      <CardContent>
        <CardHeader>
          <Typography variant='h5'>#{index + 1}</Typography>
          <StyledImg src={icon_img || defaultLogo} alt='subreddit symbol' />
          <Typography variant='h6' color='primary' style={{ fontWeight: 700 }}>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.reddit.com/${display_name_prefixed}`}
            >
              {display_name_prefixed}
            </Link>
          </Typography>
        </CardHeader>
        <CardStats>
          <StyledListItem variant='body1'>
            <FaStar color='rgb(255, 215, 0)' style={{ marginRight: '5px' }} />
            {subscribers.toLocaleString()} subs
          </StyledListItem>
          <StyledListItem variant='body1'>
            <FaCube color='rgb(129, 195, 245)' style={{ marginRight: '5px' }} />
            {advertiser_category || 'no catergory'}
          </StyledListItem>
        </CardStats>
      </CardContent>
    </CardStyled>
  )
}

export default SubCard

// STYLING
const CardStyled = styled(Card)`
  margin: 1rem 0;
  padding: 1rem;
  width: 250px;
`

const CardHeader = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`

const StyledImg = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const StyledListItem = styled(Typography)`
  display: flex;
  align-items: center;
`

const CardStats = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
