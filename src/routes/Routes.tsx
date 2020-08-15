import React, {useState} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {RouteParamList} from './RoutesParamList'
import {useUserStore} from '../store/userStore'
import {useNoteStore} from '../store/noteStore'
import {Note, Home, Login} from '../screens'
import {Icon, Modal} from '../components'

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
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerRight: () => <Header />,
            headerTitle: () => null
          }}
        />
        <Stack.Screen name='Note' component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Header: React.FC = () => {
  const [modal, setModal] = useState(false)
  const [text, setText] = useState('')

  const {addNote} = useNoteStore()

  const onBtnPress = () => {
    addNote(text)
    setText('')
    setModal(false)
  }

  return (
    <View>
      <Icon
        name='add-circle-outline'
        style={{paddingRight: 5, color: '#333'}}
        icon='add'
        onPress={() => setModal(true)}
      />
      <Modal visible={modal} setModal={setModal}>
        <TextInput
          style={{borderWidth: 1, height: 35, borderColor: '#ddd', padding: 5, width: 300, borderRadius: 6}}
          onChangeText={t => setText(t)}
          value={text}
        />
        <View style={{height: 50, paddingTop: 5}}>
          <Button onPress={onBtnPress} title={'Add Idea'} />
        </View>
      </Modal>
    </View>
  )
}
