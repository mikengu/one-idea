import React, {useState} from 'react'
import {useNoteStore} from '../store/noteStore'
import {TextInput, View, Button} from 'react-native'
import {Modal, Icon} from './'

interface HeaderProps {

}

export const Header: React.FC = () => {
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
