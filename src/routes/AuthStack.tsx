import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {RouteParamList} from './RoutesParamList'
import {Login} from '../screens'

interface AuthStackProps {

}

const Stack = createStackNavigator<RouteParamList>()

export const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  )
}
