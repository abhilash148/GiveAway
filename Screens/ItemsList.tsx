import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native';
import Item from "./Item";


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


    const handlePress = () => {
        navigation.navigate('ItemDescription');
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
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
            <View style={styles.row}>
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
            <View style={styles.row}>
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
            <View style={styles.row}>
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
            <View style={styles.row}>
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
            <View style={styles.row}>
                <Item onPress={handlePress}/>
                <Item onPress={handlePress}/>
            </View>
        </ScrollView>

        <Pressable style={styles.button} onPress={() => navigation.navigate('NewGiveaway')}>
            <Text style={styles.text}>New Giveaway</Text>
        </Pressable>

        </View>
    );
};

export default ItemsList;