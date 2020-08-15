import React, {createContext, useState, useMemo, ReactNode, useContext, useCallback} from 'react'

const idGen = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

interface ContextProps {
  children: ReactNode
}

interface User {
  id?: string;
  username?: string;
}

interface UserContextVal {
  user: User,
  setUser: (user: string) => void
}

const defaultUser: User = {
  id: '',
  username: ''
}

const UserContext = createContext<UserContextVal>({user: defaultUser, setUser: () => {}})

export const UserProvider: React.FC<ContextProps> = ({children}) => {
  const [user, settingUser] = useState<User>({})

  const setUser = useCallback(user => {
    settingUser({id: idGen(), username: user})
  }, [])

  const value = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export const useUserStore = () => {
  return useContext(UserContext)
}
