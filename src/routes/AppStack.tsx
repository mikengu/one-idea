import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {RouteParamList} from './RoutesParamList'
import {Header} from '../components'
import {BottomNav} from './BottomNav'
import {Note} from '../screens'

interface AppStackProps {

}

const Stack = createStackNavigator<RouteParamList>()

export const AppStack: React.FC<AppStackProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={BottomNav}
        options={{
          headerRight: () => <Header />,
          headerTitle: () => null

        }}
      />
      <Stack.Screen name='Note' component={Note} />
    </Stack.Navigator>
  )
}
