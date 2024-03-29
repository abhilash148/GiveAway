import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity, Alert } from "react-native";
import auth from "@react-native-firebase/auth";

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

  const handleCreate = async ()=>{
        try{
            const response = await auth().createUserWithEmailAndPassword(userName,password);
            Alert.alert("User created" + response);
            navigation.navigate('Dashboard');
        } catch(error){
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Error', 'That email address is already in use!');
              } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'That email address is invalid!');
              } else {
                Alert.alert('Error', 'An error occurred, please try again later.' + error);
              }
        }
  }

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

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.text}>Create an account</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <Text>Already have an account?</Text>
        <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Sign in</Text>
      </View>

    </View>
  );
};

export default Signup;