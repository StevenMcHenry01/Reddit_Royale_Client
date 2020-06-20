import React, { createContext, useState } from 'react'
import { useLocalStorage } from '@rehooks/local-storage'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const storedUser = useLocalStorage('user')
  const initialUserState = storedUser[0] ? storedUser[0] : null
  const [user, setUser] = useState(initialUserState)

  const [topSubs, setTopSubs] = useState(null)

  const providerValue = {
    user,
    setUser,
    topSubs,
    setTopSubs,
  }

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  )
}
