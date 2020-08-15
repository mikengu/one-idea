import React from 'react'
import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Note, Home, Login} from '../screens'
import {RouteParamList} from './RoutesParamList'
import {useUserStore} from '../store/userStore'

interface RoutesProps {

}

const Stack = createStackNavigator<RouteParamList>()

const HeaderRight = () => {
  const {user} = useUserStore()
  return (
    <View style={{paddingRight: 10}}>
      <Text>{user.username}</Text>
    </View>
  )
}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerRight: () => <HeaderRight />
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Note' component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
