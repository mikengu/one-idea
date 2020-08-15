import React, {useState} from 'react'
import {Center} from '../components'
import {useUserStore} from '../store/userStore'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  useWindowDimensions

} from 'react-native'

const Login: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const {setUser} = useUserStore()
  const windowWidth = useWindowDimensions().width / 2

  return (
    <Center>
      <View style={{width: windowWidth}}>
        <Text>Username</Text>
        <TextInput onChangeText={text => setInput(text)} autoFocus style={styles.input} />
        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.input} />
        <View style={styles.button}>
          <Button
            onPress={() => {
              setUser(input)
            }}
            title={'Login'}
          />
        </View>
      </View>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%'
  },
  button: {
    paddingTop: 5
  }
})

export default Login
