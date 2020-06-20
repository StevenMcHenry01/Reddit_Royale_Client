// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import Img from 'react-cool-img'
import fightingGif from '../../assets/images/fight.gif'

// My imports
import WinnerCard from './WinnerCard'

const FightZone = ({ results, fightLoading, handleTotalReset }) => {
  return (
    <Wrapper>
      {fightLoading && <Img style={{ height: '500px' }} src={fightingGif} />}
      {results && <WinnerCard results={results} handleTotalReset={handleTotalReset}/>}
    </Wrapper>
  )
}

export default FightZone

// STYLING
const Wrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
