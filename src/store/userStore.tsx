import React, {createContext, useState, useMemo, ReactNode, useContext, useCallback} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const idGen = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

interface ContextProps {
  children: ReactNode
}

type User = null | {
  id?: string;
  username?: string;
}

interface UserContextVal {
  user: User,
  setUser: (user: string) => void,
  logout: () => void
}

const defaultUser: User = {
  id: '',
  username: ''
}

const UserContext = createContext<UserContextVal>({user: defaultUser, setUser: () => {}, logout: () => {}})

export const UserProvider: React.FC<ContextProps> = ({children}) => {
  const [user, settingUser] = useState<User>({})

  const setUser = useCallback(async user => {
    settingUser({id: idGen(), username: user})
    try {
      await AsyncStorage.setItem('user', user)
    } catch (e) {
      console.log(e) //eslint-disable-line
    }
  }, [])

  const logout = useCallback(async () => {
    settingUser(null)
    try {
      await AsyncStorage.removeItem('user')
    } catch (e) {
      console.log(e) //eslint-disable-line
    }
  }, [])

  const value = useMemo(() => ({user, setUser, logout}), [user, setUser, logout])

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export const useUserStore = () => {
  return useContext(UserContext)
}
