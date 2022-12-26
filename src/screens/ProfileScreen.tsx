import { View, Text } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';

export default function ProfileScreen() {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
