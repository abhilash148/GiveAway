import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity, Alert, Image } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import {launchImageLibrary} from 'react-native-image-picker';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between'
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
    name: {
          height: 70,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          width:'100%',
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
    imgContainer: {
        width: 200, // Adjust the size of the container as needed
        height: 200, // Adjust the size of the container as needed
        borderRadius: 100, // Half of the width and height to create a circle
        overflow: 'hidden', // Clip the content inside the container to fit the circle
        borderWidth: 2, // Add border width if desired
        borderColor: 'white', // Add border color if desired
        flexDirection: 'row',
        marginLeft: 100
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover' // Maintain aspect ratio and fill the container
    },
    placeholder: {
      width: 200,
      height: 200,
      backgroundColor: '#e0e0e0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    placeholderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#757575',
    }
  
  });


const Signup = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name,setName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const uploadImage = ()=>{

          launchImageLibrary({}, async response => {
              if(response.errorMessage){
                  Alert.alert("Image Upload Error:" + response.errorMessage);
              }
              else if(response.didCancel){
              }
              else{
                  response.assets.map( asset => {
                          const reference = storage().ref('images/' + asset.fileName);
                          const task = reference.putFile(asset.uri);

                          task.then(async ()=>{
                              const downloadURL = await reference.getDownloadURL();
                              setImageURL(downloadURL);
                          });
                      }
                  );
              }
          });
      }

  const handleCreate = async ()=>{
        if(name == ''){
            Alert.alert("Please provide a name for user!");
        }
        else if(userName == ''){
            Alert.alert("Please provide a email!");
        }
        else if(password == ''){
            Alert.alert("Please provide a password!");
        }
        else if(phoneNumber == ''){
            Alert.alert("Please provide a phone number!");
        }
        else if(imageURL == ''){
            Alert.alert("Please upload your Photo!");
        }
        else {
            try{
                const response = await auth().createUserWithEmailAndPassword(userName,password);

                const response2 = await firestore().collection('Profiles').doc(userName).set({
                                    name: name,
                                    email: userName,
                                    phoneNumber: phoneNumber,
                                    imageURL: imageURL
                                });

                Alert.alert("User created");
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
  }

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
      },
    ]}>

      <Text style={styles.welcome}>Become a Member!</Text>
      <View style={styles.imgContainer}>
          <TouchableOpacity onPress={uploadImage} style={styles.placeholder}>
              {imageURL?(<Image source={{uri:imageURL}} style={styles.image} />):(
                       <Text style={styles.placeholderText}>Upload Image</Text>
              )}
          </TouchableOpacity>
      </View>
      <TextInput
          style={styles.name}
          placeholder='Name'
          onChangeText={newText => setName(newText)}
          defaultValue={name}
      />
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