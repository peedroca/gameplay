import React from 'react';
import { Image, ImageSourcePropType } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImagem: string;
}

export function Avatar({urlImagem} : Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image 
        source={{ uri: urlImagem}} 
        style={styles.avatar}
      />
    </LinearGradient>
  );
}