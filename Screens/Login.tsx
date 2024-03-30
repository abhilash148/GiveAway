import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Button, Alert, Pressable, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
  email: {
    height: 70,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
  },
  password: {
    height: 70,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: 'blue',
  },

});

const Login = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleLogin = async ()=>{
  try{
          const userCredential = await auth().signInWithEmailAndPassword(userName,password);
          navigation.navigate('Dashboard')
      }
      catch (error) {
             // Handle login errors
             Alert.alert('Login failed' + error.message);
           }
       };

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
      },
    ]}>

      <Text style={styles.welcome}>Welcome!</Text>

      <TextInput
      style={styles.email}
        placeholder='Email'
        onChangeText={newText => setUserName(newText)}
        defaultValue={userName}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.password}
        secureTextEntry = {true}
        placeholder='Password'
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
        />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <View style={styles.bottom}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>Sign up now</Text>
      </View>

    </View>
  );
};


export default Login;
