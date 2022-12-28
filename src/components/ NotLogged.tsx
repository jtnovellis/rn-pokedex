import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// por alguna razon no puedo agregar un tipo valido como argumento
// tema para resolver la proxima vex que abra este codigo

export default function NotLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        You have log in to see your favorites pokemons
      </Text>
      <Button
        title='Go to Log in'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
