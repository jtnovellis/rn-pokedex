import { View } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
import useAuth from '../hooks/useAuth';

export default function ProfileScreen() {
  const { auth } = useAuth();
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
