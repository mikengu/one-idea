import React, {ReactNode} from 'react'
import {Modal as ReactModal, View, StyleSheet} from 'react-native'
import {Center} from './Center'
import {MaterialIcons} from '@expo/vector-icons'

interface ModalProps {
    children: ReactNode,
    visible: boolean,
    setModal: (toggle: boolean) => void
}

export const Modal: React.FC<ModalProps> = ({children, setModal, visible}) => {
  return (
    <ReactModal visible={visible} animationType={'slide'}>
      <View>
        <MaterialIcons
          name={'close'}
          icon={'close'}
          onPress={() => setModal(false)}
          style={styles.closeIcon}
          size={24}
        />
        <Center>
          <View>
            {children}
          </View>
        </Center>
      </View>
    </ReactModal>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    padding: 2
  }
})

Modal.defaultProps = {
  setModal: () => {},
  visible: false

}
