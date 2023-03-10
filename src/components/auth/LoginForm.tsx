import {
  View,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  Button,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDb';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const { login, logout } = useAuth();
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      setError('');
      const { username, password } = values;
      if (username !== user.username || password !== user.password) {
        setError('The username or password is not valid');
      } else {
        login(userDetails);
      }
    },
  });
  return (
    <View>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Sign in' onPress={() => formik.handleSubmit()} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function validationSchema() {
  return {
    username: Yup.string().required('The user is required'),
    password: Yup.string().required('The password is required'),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});
