import React, {useState} from 'react'
import {FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, useWindowDimensions, Button} from 'react-native'
import {useNoteStore, NoteProvider} from '../store/noteStore'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteParamList} from '../routes/RoutesParamList'
import {MaterialIcons} from '@expo/vector-icons'
import {Center, Modal} from '../components'

interface GridItem {
  item: {text: string, id: string}
}

interface HomeNavigation {
  navigation: StackNavigationProp<RouteParamList, 'Home'>
}

const Home = ({navigation}: HomeNavigation) => {
  const [modal, setModal] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  const {note, setNote} = useNoteStore()

  const onBtnPress = () => {
    setNote(text)
    setModal(false)
  }

  const windowWidth = useWindowDimensions().width
  const numOfColumns = windowWidth < 500 ? 2 : 4

  const renderGridItem = ({item}: GridItem) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('Note')
        }}
      >
        <Center>
          <Text>{item.text}</Text>
        </Center>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList
        key={numOfColumns}
        data={note}
        renderItem={renderGridItem}
        numColumns={numOfColumns}
      />
      <MaterialIcons name={'add'} icon={'add'} onPress={() => setModal(true)} size={24} />
      <Modal visible={modal} setModal={setModal}>
        <TextInput
          style={{borderWidth: 1, height: 35, borderColor: '#ddd', padding: 5, width: 300, borderRadius: 6}}
          onChangeText={t => setText(t)}
          value={text}
        />
        <View style={styles.button}>
          <Button onPress={onBtnPress} title={'Add Idea'} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 10,
    flex: 1,
    padding: 5,
    height: 150,
    minWidth: 150,
    maxWidth: 200,
    backgroundColor: '#FDFD96'
  },
  button: {
    paddingTop: 5,
    height: 50
  }
})

const HomePage = (props: HomeNavigation) => {
  return (
    <NoteProvider>
      <Home {...props} />
    </NoteProvider>
  )
}

export default HomePage
