import React from "react";
import {Button, Image, StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerSt:{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-after'
    },
    image: {
        width: '100%',
        height: 300
    }, 
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: 14
    },
    descHeader:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    favorite: {
        width: 20,
        height: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 16,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

const ItemDescription = () => {
    const route = useRoute();
    const itemData = route.params?.giveaway;

    const contactGiver = ()=>{

        Alert.alert("Contacted Giver");
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri:itemData.imageURL}} style={styles.image}/>
            <View style={styles.containerSt}>
            <View style={styles.view}>
                <Text style={styles.header}>{itemData.title}</Text>
                <Image source={require('./icons/heart.png')} style={styles.favorite}/>
            </View>
            <View>
            <Text style={styles.descHeader}>Description</Text>
            <Text style={styles.description}>{itemData.description}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={contactGiver}>
                <Text style={styles.text}>Contact Giver</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ItemDescription;