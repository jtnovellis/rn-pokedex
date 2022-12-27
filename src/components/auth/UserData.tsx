import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ItemMenu from '../ItemMenu';
import { size } from 'lodash';
import { getFavPoke } from '../../api/favorite';
import { useFocusEffect } from '@react-navigation/native';

export default function UserData() {
  const { auth, logout } = useAuth();
  const [pokeAmount, setPokeAmount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const res = await getFavPoke();
          setPokeAmount(size(res));
        } catch {
          setPokeAmount(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>
          {`${auth?.firstName} ${auth?.lastName}`}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Name' text={`${auth?.firstName} ${auth?.lastName}`} />
        <ItemMenu title='Username' text={auth?.username} />
        <ItemMenu title='Email' text={auth?.email} />
        <ItemMenu title='Favorites' text={`${pokeAmount} Pokemons`} />
      </View>
      <Button title='Log out' onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
});
