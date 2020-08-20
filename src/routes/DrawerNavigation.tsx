import React from 'react'
import {AppStack} from './AppStack'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='home' component={AppStack} />
    </Drawer.Navigator>
  )
}
