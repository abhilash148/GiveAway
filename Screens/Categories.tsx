import React from "react";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";


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
    },
});

const Category = ({navigation}) => {

    
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                // need to add navigation to next screen
                navigation.navigate('ItemsList')
            }}>
        <ImageBackground source={require('./images/kitchen.png')} style={styles.image} blurRadius={4}>
            <View>
                <Text style={styles.title}>Kitchen</Text>
            </View>
        </ImageBackground>
        </Pressable>
        </View>
    );
};

export default Category;