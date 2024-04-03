import React, { useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native';
import Item from "./Item";
import firestore from "@react-native-firebase/firestore";
import { useUsername } from './UsernameContext';
import {useRoute} from '@react-navigation/native';


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

const ItemsList = ({navigation}) => {

    const [categoryGiveaways,setcategoryGiveaways] = useState([]);
    const {userName} = useUsername();
    const route = useRoute();

    useEffect(()=>{ const getGiveaways = async ()=>{
            try{

                const queryOutput = await firestore()
                                        .collection('Giveaways')
                                        .where('category','==',route.params?.category)
                                        .where('userName','==',userName)
                                        .get();

                const fetchedGiveaways = queryOutput.docs.map(doc => ({id:doc.id, ...doc.data()}));
                setcategoryGiveaways(fetchedGiveaways);
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
        navigation.navigate('ItemDescription',{giveaway});
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
            {categoryGiveaways.map(catGiveaway => (
                <Item  key={catGiveaway.id}
                       onPress={() => handlePress(catGiveaway)}
                       id={catGiveaway.id}
                       imgSrc = {catGiveaway.imageURL}
                       objName = {catGiveaway.title}/>
            ))}
            </View>
        </ScrollView>
        </View>
    );
};

export default ItemsList;