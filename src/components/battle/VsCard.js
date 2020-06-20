// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import Img from 'react-cool-img'
import ryu from '../../assets/images/ryu.png'
import warrior from '../../assets/images/warrior.png'
import { FaWindowClose } from 'react-icons/fa'

// My imports

const VsCard = ({ sub, id, handleReset }) => {
  return (
    <CardStyled>
      {sub ? (
        <Typography
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          variant='h5'
        >
          {sub.display_name}
          <EmptyButton onClick={() => handleReset(id)}>
            <Icon color='#ff4500' />
          </EmptyButton>
        </Typography>
      ) : (
        <Typography variant='h5'>Unknown Challenger</Typography>
      )}
      <Img
        style={{ width: '150px', height: '250px', marginTop: '2rem' }}
        src={id === 'subOne' ? ryu : warrior}
      />
    </CardStyled>
  )
}

export default VsCard

// STYLING
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EmptyButton = styled.button`
  background: transparent;
  border: none;
  margin-left: 1rem;
`

const Icon = styled(FaWindowClose)`
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`
