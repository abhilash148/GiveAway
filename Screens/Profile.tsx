import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    image: {

    },
    name: {

    },
    email: {

    },
    options: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    iconLeft: {
        width: 36,
        height: 36,
    },
    iconRight: {
        width: 24,
        height: 24,
    },
    iconText: {
        paddingTop: 12,
        fontSize: 18,
    },
});

const Profile = () => {
    return (
        <View style={styles.container}>
            <Items imageName="edit_icon" name="Edit profile"/>
            <Items imageName="edit_icon" name="My Giveaways"/>
            <Items imageName="edit_icon" name="Favorites"/>
            <Items imageName="edit_icon" name="Share"/>
            <Items imageName="edit_icon" name="Logout"/>
        </View>
    );
};

export default Profile;

type optionProps = {
    name: string,
    imageName: string,
}

const Items = (props: optionProps) => {
    return (
        <View style={styles.options}>
            <Image source={require('./icons/edit_icon.png')} style={styles.iconLeft}/>
            <Text style={styles.iconText}>{props.name}</Text>
            <Image source={require('./icons/next.png')} style={styles.iconRight}/>
        </View>
    );
};