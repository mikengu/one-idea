import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Category = () => {
  return (
    <View style={styles.container}>
      <Text>Note</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Category
