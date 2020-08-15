import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View, TextInput, Button} from 'react-native'
import {RouteParamList} from './RoutesParamList'
import {useNoteStore} from '../store/noteStore'
import {Icon, Modal} from '../components'
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
        icon='add-circle'
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
