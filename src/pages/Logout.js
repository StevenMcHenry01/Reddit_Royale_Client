// 3rd party imports
import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { deleteFromStorage } from '@rehooks/local-storage'
import axios from 'axios'

// My imports
import Loading from '../components/utils/Loading'
import { UserContext } from '../contexts/UserContext'

const Logout = () => {
  const [loading, setLoading] = useState(true)
  const { setUser } = useContext(UserContext)

  const handleLogout = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`
      )
    } catch (e) {
      console.error(e)
    }
    deleteFromStorage('user')
    setUser(null)
    setLoading(false)
  }

  useEffect(() => {
    handleLogout()
  }, [])

  if (loading) {
    return <Loading />
  }
  return <Redirect to='/login' />
}

export default Logout

// STYLING
