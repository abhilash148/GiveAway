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
            <Category navigation={navigation} imgSrc={require('./images/kitchen.png')} category={'KITCHEN'}/>
            <Category navigation={navigation} imgSrc={require('./images/LivingRoom.jpeg')} category={'LIVING ROOM'}/>
            <Category navigation={navigation} imgSrc={require('./images/BedRoom.jpeg')} category={'BED ROOM'}/>
        </ScrollView>
    );

};

export default Home;