import React from "react";
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        flexDirection: 'column',
        margin: 8,
        borderWidth: 1,
        borderColor: 'blue',
    },
    image: {
        flex: 1,
        height: 110,
        width: '100%',
    },
    bottom: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingLeft: 4,
        paddingRight: 4,
    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    favourite: {
        width: 18,
        height: 18
    }
});

const Item = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
                <Image source={require('./images/kitchen.png')} style={styles.image}/>
                <View style={styles.bottom}>
                    <Text>Study Table and Chair</Text>
                    <Image source={require('./icons/heart.png')} style={styles.favourite}/>
                </View>
        </View>
        </TouchableOpacity>
    );
};

export default Item;