import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

interface IconProps {
    icon: string,
    name: string,
    size?: number,
    style?: {},
    onPress?: () => void
}

export const Icon: React.FC<IconProps> = ({icon, name, onPress, size, style}) => {
  return (
    <MaterialIcons
      icon={icon}
      name={name}
      onPress={onPress}
      size={size}
      style={{...style}}
    />
  )
}

Icon.defaultProps = {
  icon: '',
  name: '',
  onPress: () => {},
  size: 24,
  style: {}
}
