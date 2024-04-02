import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Pressable, Text, TouchableOpacity, Alert, Image } from "react-native";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import {launchImageLibrary} from 'react-native-image-picker';
import { useUsername } from './UsernameContext';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    input: {
        height: 40,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        marginTop: 8,
        backgroundColor: '#f0f0f0',
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: 'black',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        marginTop: 8,
      },
      text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
        },
        uploadImageView:{
            flex:1,
            alignItems:'center',
            justifyContent: 'center'
        }
});

const NewGiveaway = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [imageURL, setImageURL] = useState(null);
    const {userName} = useUsername();

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

    const addGiveaway = async ()=>{
        if (category == ''){
            Alert.alert("Please select a category");
        }
        else if(category !== "KITCHEN" && category !== "LIVING ROOM" && category !== "BED ROOM"){
            Alert.alert("Category is invalid, Refer Home Page");
        }
        else if (imageURL !== null){
            try{
                const response = await firestore().collection('Giveaways').add({
                    title: title,
                    description: description,
                    category:category,
                    address: address,
                    city: city,
                    state: state,
                    pincode: pincode,
                    imageURL: imageURL,
                    userName: userName
                });
                Alert.alert('Giveaway Added' + response);
            }
            catch (error) {
                Alert.alert(error.message);
            }
        }
        else{
            Alert.alert("Please upload an image" + imageURL);
        }
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.uploadImageView}>
            {imageURL?(<Image source={{uri:imageURL}} style={{ width: 200, height: 200 }} />):(
                <TouchableOpacity onPress={uploadImage} style={styles.placeholder}>
                     <Text style={styles.placeholderText}>Upload Image</Text>
                </TouchableOpacity>
            )}
            </View>

            <TextInput
                style={styles.input}
                placeholder='Object Name'
                onChangeText={newText => setTitle(newText)}
                defaultValue={title}
            />
            <TextInput
                style={styles.input}
                placeholder='Description'
                onChangeText={newText => setDescription(newText)}
                defaultValue={description}
            />
            <TextInput
                style={styles.input}
                placeholder='Category'
                onChangeText={newText => setCategory(newText.toUpperCase())}
                defaultValue={category}
            />
            <TextInput
                style={styles.input}
                placeholder='Address'
                onChangeText={newText => setAddress(newText)}
                defaultValue={address}
                multiline={true}
            />

            <TextInput
                style={styles.input}
                placeholder='City'
                onChangeText={newText => setCity(newText)}
                defaultValue={city}
            />

            <TextInput
                style={styles.input}
                placeholder='State'
                onChangeText={newText => setState(newText)}
                defaultValue={state}
            />

            <TextInput
                style={styles.input}
                placeholder='Pincode'
                onChangeText={newText => setPincode(newText)}
                defaultValue={pincode}
                keyboardType='decimal-pad'
            />

            <TouchableOpacity style={styles.button} onPress={addGiveaway}>
                <Text style={styles.text}>Add Giveaway</Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
};

export default NewGiveaway;