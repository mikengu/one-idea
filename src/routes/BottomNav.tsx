import React from 'react'
import {Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RouteParamList} from './RoutesParamList'
import {Icon} from '../components'
import {Home} from '../screens'

interface BottomNavProps {

}

const Tabs = createBottomTabNavigator<RouteParamList>()

const Favorite = () => <Text>Favorite</Text>

export const BottomNav: React.FC<BottomNavProps> = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          const iconName = route.name === 'Home' ? 'home' : 'favorite'
          return (
            <Icon name={iconName} icon={iconName} />
          )
        }
      })}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Favorite' component={Favorite} />
    </Tabs.Navigator>
  )
}
