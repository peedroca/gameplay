import React from 'react';
import { View, Text, Alert } from 'react-native'
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  const { user, signOut } = useAuth();
  
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut()
      }      
    ])
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImagem={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            {user.firstname}
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}