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
    marginTop: 16,
  },
  phone: {
    height: 70,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
const EditProfile = ({navigation})=>{
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCreate = async ()=>{
        // Need to add code here
  }

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
      },
    ]}>

      <Text style={styles.welcome}>Profile</Text>

      <TextInput
        style={styles.email}
        placeholder='Email'
        onChangeText={newText => setUserName(newText)}
        defaultValue={userName}
        keyboardType='email-address'
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
        <Text style={styles.text}>Update Profile</Text>
      </TouchableOpacity>

    </View>
  );
};

export default EditProfile;