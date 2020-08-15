import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {useUserStore} from '../store/userStore'
import {AuthStack} from './AuthStack'
import {AppStack} from './AppStack'

export const Routes: React.FC = () => {
  const {user} = useUserStore()
  return (
    <NavigationContainer>
      {!user.username ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  )
}
