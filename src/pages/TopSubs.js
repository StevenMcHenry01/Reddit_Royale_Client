// 3rd party imports
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { CenteredDiv } from '../styles/utils/CenteredDiv'
import Loading from '../components/utils/Loading'
import axios from 'axios'
import { writeStorage, deleteFromStorage } from '@rehooks/local-storage'
import styled from 'styled-components'

// My imports
import SubCard from '../components/topSubs/SubCard'

const TopSubs = () => {
  document.title = 'Reddit Royale | Top Subreddits'
  const { user, setUser, topSubs, setTopSubs } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getSubs = async () => {
    if (user) {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/getTopSubs`,
        {
          headers: {
            access_token: user.access_token,
            refresh_token: user.refresh_token,
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
      setTopSubs(res.data.data.data.children)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!topSubs) {
      getSubs()
    }
  }, [])

  if (loading && !topSubs)
    return (
      <CenteredDiv>
        <Loading />
      </CenteredDiv>
    )
  if (error) return <div>{error || 'Error'}</div>
  return (
    <React.Fragment>
      <CardGrid>
        {topSubs.map((sub, index) => {
          return <SubCard key={sub.data.id} sub={sub.data} index={index} />
        })}
      </CardGrid>
    </React.Fragment>
  )
}

export default TopSubs

// STYLING
const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
