import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {'Conecte-se\ne organize suas\njogatinas'}
          </Text>

          <Text style={styles.subtitle}>
            {'Crie grupos para jogar seus games\nfavoritos com seus amigos'}
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}