import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ItemMenu from '../ItemMenu';

export default function UserData() {
  const { auth, logout } = useAuth();
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
        <ItemMenu title='Favorites' text='0 Pokemons' />
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
