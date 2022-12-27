import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import Pokemon from '../screens/Pokemon';

export type RootStackParamList = {
  Favorites: undefined;
  Pokemon: { pokemonId: number } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
