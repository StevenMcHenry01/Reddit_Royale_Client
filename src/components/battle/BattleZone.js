// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import Img from 'react-cool-img'
import { Button } from '@material-ui/core'

// My imports
import vs from '../../assets/images/vs.png'
import VsCard from './VsCard'

const BattleZone = ({ subOne, subTwo, handleReset, handleFight }) => {
  return (
    <BattleZoneWrapper>
      <CardSection>
        <VsCard sub={subOne} id={'subOne'} handleReset={handleReset} />
        <Img style={{ maxWidth: '200px' }} src={vs} alt='versus symbol' />
        <VsCard sub={subTwo} id={'subTwo'} handleReset={handleReset} />
      </CardSection>
      {subOne && subTwo && (
        <ButtonStyled
          onClick={() => handleFight()}
          color='primary'
          variant='contained'
        >
          Fight
        </ButtonStyled>
      )}
    </BattleZoneWrapper>
  )
}

export default BattleZone

// STYLING
const BattleZoneWrapper = styled.div`
  width: 85%;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
`

const CardSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const ButtonStyled = styled(Button)`
  font-size: 4rem;
  align-self: center;
`
