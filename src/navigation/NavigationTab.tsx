import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Favorite: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Favorite' component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
