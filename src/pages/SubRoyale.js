// 3rd party imports
import React, { useState, useContext } from 'react'
import { TextField, Button, Chip, Typography } from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios'

// My imports
import { UserContext } from '../contexts/UserContext'
import Loading from '../components/utils/Loading'
import BattleZone from '../components/battle/BattleZone'
import FightZone from '../components/battle/FightZone'
import { deleteFromStorage, writeStorage } from '@rehooks/local-storage'
import { fightAssessment } from '../components/utils/fightAssessment'

const SubRoyale = () => {
  document.title = 'Reddit Royale | Subreddit Royale'
  const { user, setUser } = useContext(UserContext)
  const [fighting, setFighting] = useState(false)
  const [fightLoading, setFightLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [subOne, setSubOne] = useState(null)
  const [subTwo, setSubTwo] = useState(null)
  const [subList, setSubList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchTerm && !(subOne && subTwo)) {
      setLoading(true)
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/admin/getSubredditList`,
          {
            headers: {
              access_token: user.access_token,
              refresh_token: user.refresh_token,
              sub: searchTerm,
            },
          }
        )
        if (res.status === 401) {
          setError('auth Error')
          return
        }
        if (res.data.newAccessToken) {
          await setUser((user) => ({
            ...user,
            access_token: res.data.newAccessToken,
          }))
          await deleteFromStorage('user')
          await writeStorage('user', user)
        }
        setSubList(res.data.data.data.children)
      } catch (e) {
        setError(e.message)
        console.error(e.message)
      }
      setLoading(false)
    }
  }

  const handleFight = () => {
    if (subOne && subTwo) {
      setFighting(true)
      setFightLoading(true)
      setTimeout(()=>{
        const fightResults = fightAssessment(subOne, subTwo)
        setResults(fightResults)
        setFightLoading(false)
      }, 3000)
    }
  }

  const handleChoose = (id, subReddit) => {
    id === 'subOne' ? setSubOne(subReddit) : setSubTwo(subReddit)
    setSearchTerm('')
    setSubList(null)
  }

  const handleReset = (id) =>
    id === 'subOne' ? setSubOne(null) : setSubTwo(null)

  const handleTotalReset = () => {
    setSubOne(null)
    setSubTwo(null)
    setFighting(false)
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <PageWrapper>
      <SearchArea onSubmit={e=>handleSearch(e)}>
        <SearchTextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          label='Search Subreddits'
          variant='filled'
          disabled={subOne && subTwo && true}
        />
        <SearchButton
          type='submit'
          variant='contained'
          color='primary'
          disabled={subOne && subTwo && true}
        >
          Search
        </SearchButton>
      </SearchArea>
      {loading ? (
        <div style={{ alignSelf: 'center', marginTop: '2rem' }}>
          <Loading />
        </div>
      ) : (
        <React.Fragment>
          {subList && (
            <React.Fragment>
              {subList.length > 0 ? (
                <Typography style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Please Choose your subreddit below
                </Typography>
              ) : (
                <Typography style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Looks like nothing came up with that search. Perhaps broaden
                  your search term
                </Typography>
              )}
              <ChipWrapper>
                {subList.map((sub) => (
                  <Chip
                    onClick={() =>
                      handleChoose(subOne ? 'subTwo' : 'subOne', sub.data)
                    }
                    style={{ margin: '3px' }}
                    key={sub.data.name}
                    label={sub.data.display_name_prefixed}
                  />
                ))}
              </ChipWrapper>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
      {fighting ? (
        <FightZone results={results} fightLoading={fightLoading} handleTotalReset={handleTotalReset}/>
      ) : (
        <BattleZone
          subOne={subOne}
          subTwo={subTwo}
          handleReset={handleReset}
          handleFight={handleFight}
        />
      )}
    </PageWrapper>
  )
}

export default SubRoyale

// STYLING
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const SearchArea = styled.form`
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const SearchTextField = styled(TextField)`
  width: 80%;
`

const SearchButton = styled(Button)`
  width: 18%;
`
const ChipWrapper = styled.div`
  margin: 0.5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 70%;
`
