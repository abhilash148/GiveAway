import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

type CategoryProps = {
    name: string
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        height: 200,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

const Category = () => {
    return (
        <ImageBackground source={require('./images/kitchen.png')} style={styles.container} blurRadius={4}>
            <View>
                <Text style={styles.title}>Kitchen</Text>
        </View>
        </ImageBackground>
    );
};

export default Category;