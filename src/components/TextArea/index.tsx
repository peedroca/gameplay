import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native'
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function TextArea({...rest}: TextInputProps) {
  return (
    <TextInput 
      style={styles.container}
      {...rest}
    />
  );
}