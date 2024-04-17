import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Button, Alert, Pressable, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useUsername } from './UsernameContext';

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

  const {userName, setUserName, password, setPassword} = useUsername();
  const [error1, setErrors] = useState({});
  const [isFormValid, SetIsFormValid] = useState(false);


  const validateForm = () => {
    let errors = {};
    
    if (!userName) {
      errors.email = "Email is required";
    } else if (userName.length < 6) {
      errors.email = 'Invalid email';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password should be atleast 8 characters long';
    }

    setErrors(errors);
    SetIsFormValid(Object.keys(errors).length === 0);

  };

  const handleLogin = async ()=>{
    validateForm();
    if (isFormValid) {
      try{
        const userCredential = await auth().signInWithEmailAndPassword(userName,password);
        navigation.navigate('Dashboard')
      }
      catch (error) {
           // Handle login errors
           Alert.alert('Login failed' + error.message);
      }
    } else {
        Alert.alert('Please fill fields', (error1.email) ? error1.email : error1.password);
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
