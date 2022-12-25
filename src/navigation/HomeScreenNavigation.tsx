import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Pokedex'
        component={HomeScreen}
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen name='Pokemon' component={Pokemon} />
    </Stack.Navigator>
  );
}
