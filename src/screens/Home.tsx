import React from 'react'
import {FlatList, StyleSheet, View, Text, TouchableOpacity, useWindowDimensions} from 'react-native'
import {useNoteStore} from '../store/noteStore'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteParamList} from '../routes/RoutesParamList'
import {Center} from '../components'

interface GridItem {
  item: {text: string, id: string}
}

interface HomeNavigation {
  navigation: StackNavigationProp<RouteParamList, 'Home'>
}

const Home = ({navigation}: HomeNavigation) => {
  const {note} = useNoteStore()

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

export default Home
