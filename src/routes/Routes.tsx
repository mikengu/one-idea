import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {DrawerNavigator} from './DrawerNavigation'
import {useUserStore} from '../store/userStore'
import {AuthStack} from './AuthStack'

export const Routes: React.FC = () => {
  const {user} = useUserStore()
  return (
    <NavigationContainer>
      {!user?.username ? <AuthStack /> : <DrawerNavigator />}
    </NavigationContainer>
  )
}
