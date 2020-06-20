// 3rd party imports
import React from 'react'
import Img from 'react-cool-img'
import styled from 'styled-components'
import { Card, Typography, Divider } from '@material-ui/core'

// My imports
import fallbackPicture from '../../assets/images/reddit_icon_black.jpg'

const UserCard = ({ user }) => {
  const { coins, icon_img, is_gold, link_karma, name, comment_karma, num_friends } = user

  return (
    <CardStyled>
      <TopSection>
        <Avatar
          className='smooth_box_shadow'
          src={icon_img || fallbackPicture}
        />
        <Typography style={{ margin: '.3rem 0', fontWeight: '600' }} variant='h4'>
          {name}
        </Typography>
        <Typography>{is_gold === 'true' ? 'Gilded' : 'Not Gilded'}</Typography>
      </TopSection>
      <BottomSection>
        <Typography>{parseInt(link_karma).toLocaleString()} link karma</Typography>
        <Divider style={{margin: '0 5px'}} orientation='vertical' flexItem/>
        <Typography>{parseInt(comment_karma).toLocaleString()} comment karma</Typography>
        <Divider style={{margin: '0 5px'}} orientation='vertical' flexItem/>
        <Typography>{parseInt(coins).toLocaleString()} coins</Typography>
      </BottomSection>
    </CardStyled>
  )
}

export default UserCard

// STYLING
const CardStyled = styled(Card)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const BottomSection = styled.div`
margin-top: 2rem;
  display: flex;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`
