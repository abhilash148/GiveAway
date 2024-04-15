import React from "react";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";


type CategoryProps = {
    name: string
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        height: 200,
    },
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'blue',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const Category = ({navigation, imgSrc, category}) => {

    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                // need to add navigation to next screen
                navigation.navigate('ItemsList',{category})
            }}>
        <ImageBackground source={imgSrc} style={styles.image} blurRadius={2}>
            <View>
                <Text style={styles.title}>{category}</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
        </View>
    );
};

export default Category;