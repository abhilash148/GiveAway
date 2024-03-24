import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    welcome: {
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      textAlign: 'center',
    },
    email: {
      height: 70,
      padding: 10,
      borderColor: 'gray',
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
    phone: {
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


const Signup = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
      },
    ]}>

      <Text style={styles.welcome}>Become a Member!</Text>

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

      <TextInput
        style={styles.phone}
        secureTextEntry = {false}
        placeholder='Phone Number'
        onChangeText={newText => setPhoneNumber(newText)}
        defaultValue={phoneNumber}
        keyboardType='numeric'
        />

      <Pressable style={styles.button}>
        <Text style={styles.text}>Create an account</Text>
      </Pressable>

      <View style={styles.bottom}>
        <Text>Already have an account?</Text>
        <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Sign in</Text>
      </View>

    </View>
  );
};

export default Signup;