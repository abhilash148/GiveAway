import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ItemsList = () => {
    return (
        <View style={styles.container}>
            <Text>One item</Text>
        </View>
    );
};

export default ItemsList;