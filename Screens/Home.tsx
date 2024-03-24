import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Category from "./Categories";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    item: {
        paddingLeft: 20, 
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

const Home = ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
            <Category navigation={navigation}/>
            <Category navigation={navigation}/>
            <Category navigation={navigation}/>
        </ScrollView>
    );

};

export default Home;