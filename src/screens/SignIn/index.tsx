import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Alert
} from 'react-native';

import { useAuth } from "../../hooks/auth";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  // const navigation = useNavigation();
  // navigation.navigate('Home');
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
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

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}