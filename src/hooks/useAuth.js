import { useState } from 'react'
import { useLocalStorage } from '@rehooks/local-storage'

const useAuth = () => {
  const [userInStorage, setUserInStorage] = useState(null)
  const storedUser = useLocalStorage('user')

  if (storedUser[0] && !userInStorage) {
    setUserInStorage(storedUser[0])
  }

  return [userInStorage]
}

export default useAuth
