import React from "react";
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        width: 180,
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

const Item = ({onPress,id,imgSrc,objName}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri:imgSrc}} style={styles.image}/>
            <View style={styles.bottom}>
                <Text style={styles.text}>{objName}</Text>
                <Image source={require('./icons/heart.png')} style={styles.favourite}/>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default Item;