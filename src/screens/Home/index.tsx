import React, { useState, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

import { Background } from "../../components/Background";
import { ListDivider } from '../../components/ListDivider';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storageResponse: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(storageResponse.filter(item => item.category === category));
    } else {
      setAppointments(storageResponse);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.matches}
              contentContainerStyle={{ paddingBottom: 69 }}
              ItemSeparatorComponent={() => <ListDivider />}
              renderItem={({ item }) => (
                <Appointment
                  key={item.id}
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
            />
          </>
      }
    </Background>
  );
}