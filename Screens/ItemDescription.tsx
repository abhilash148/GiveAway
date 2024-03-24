import React from "react";
import {Button, Image, StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14
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
    return (
        <ScrollView style={styles.container}>
            <Image source={require('./images/kitchen.png')}/>
            <View style={styles.view}>
                <Text style={styles.header}>Study Table and Chair</Text>
                <Image source={require('./icons/heart.png')} style={styles.favorite}/>
            </View>
            <Text>Description</Text>
            <Text style={styles.description}>Our standing desk can adjust the height between 28.35''-46.46'' according to your needs. Compared with the ordinary office desk, our height-adjustable desk has 3 memory buttons for different occasions, so press "s" to remember the most-used height. Stand up desk provides plenty of space for laptops and monitors. This adjustable desk uses a high-quality motor with longer service life. The electric standing desk has well-established anti-collision technology, and a safety lock function. It's perfect for preventing collisions or conflicts when an obstacle is detected during movement. It's a great choice that you can not miss!</Text>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Contact Giver</Text>
            </Pressable>
        </ScrollView>
    );
};

export default ItemDescription;