import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreenNavigation from './HomeScreenNavigation';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Favorite: undefined;
  Pokemon: { pokemonId: number } | undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreenNavigation}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require('../../assets/pokeball.png')}
      style={{ width: 65, height: 65, top: -15 }}
    />
  );
}
