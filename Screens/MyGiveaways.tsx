import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, Pressable, Alert} from 'react-native';
import Item from "./Item";
import firestore from "@react-native-firebase/firestore";
import { useUsername } from './UsernameContext';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollView: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    search: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 8
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

const MyGiveaways = ({navigation}) => {

    const [myGiveaways,setmyGiveaways] = useState([]);
    const {userName, setUserName} = useUsername();

    useEffect(()=>{ const getGiveaways = async ()=>{
        try{

            const queryOutput = await firestore()
                                    .collection('Giveaways')
                                    .where('userName','==',userName)
                                    .get();

            const fetchedGiveaways = queryOutput.docs.map(doc => ({id:doc.id, ...doc.data()}));
            setmyGiveaways(fetchedGiveaways);
        }
        catch (error) {
            Alert.alert(error.message);
        }
    }

    const unsubscribe = navigation.addListener('focus',()=>{
    getGiveaways()
    });

    return unsubscribe;
    },[]);

    const handlePress = (giveaway) => {
        const edit = true;
        navigation.navigate('NewGiveaway',{edit,giveaway});
    };

    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    return (

        <View style={styles.container}>

        <ScrollView style={styles.scrollView}>

            <TextInput
                style={styles.search}
                onChangeText={handleSearch}
                value={searchText}
                placeholder="Type here..."
            />


            <View style={styles.row}>
            {myGiveaways.map(myGiveaway => (
                <Item  key={myGiveaway.id}
                       onPress={()=>handlePress(myGiveaway)}
                       id={myGiveaway.id}
                       imgSrc = {myGiveaway.imageURL}
                       objName = {myGiveaway.title}/>
            ))}
            </View>

        </ScrollView>

        <Pressable style={styles.button} onPress={() => navigation.navigate('NewGiveaway')}>
            <Text style={styles.text}>New Giveaway</Text>
        </Pressable>

        </View>
    );
};

export default MyGiveaways;