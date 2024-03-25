import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput, Pressable, Text } from "react-native";

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
});

const NewGiveaway = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');

    return (
        <ScrollView style={styles.container}>
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

            <Pressable style={styles.button}>
                <Text style={styles.text}>Add Giveaway</Text>
            </Pressable>
            
        </ScrollView>
    );
};

export default NewGiveaway;