// 3rd party imports
import React, { useState, useEffect, useContext } from 'react'
import Loading from '../components/utils/Loading'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import queryString from 'query-string'
import { writeStorage } from '@rehooks/local-storage';

// My imports

const LoginCallback = ({ location }) => {
  const {setUser } = useContext(UserContext)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const values = queryString.parse(location.search)

  useEffect(() => {
    if (values.access_token) {
      const {
        name,
        icon_img,
        link_karma,
        comment_karma,
        num_friends,
        coins,
        is_gold,
        created,
        access_token,
        refresh_token,
      } = values

      const userData = {
        name,
        icon_img,
        link_karma,
        comment_karma,
        num_friends,
        coins,
        is_gold,
        created,
        access_token,
        refresh_token,
      }

      writeStorage('user', userData)

      setUser((user) => ({
        ...user,
        ...userData,
      }))
      setLoading(false)
    } else {
      setError('Error Authenticating')
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Redirect to='/login' />
  }

  return <Redirect to='/' />
}

export default LoginCallback

// STYLING
