import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import edit_icon from "./icons/edit.png";
import mygiveaways from "./icons/mygiveaways.png";
import favorites from "./icons/favorites.png";
import share from './icons/share.png';
import logout from './icons/logout.png';
import profilePic from "./images/profilePic.webp";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    imgContainer: {
        width: 200, // Adjust the size of the container as needed
        height: 200, // Adjust the size of the container as needed
        borderRadius: 100, // Half of the width and height to create a circle
        overflow: 'hidden', // Clip the content inside the container to fit the circle
        borderWidth: 2, // Add border width if desired
        borderColor: 'white', // Add border color if desired
        flexDirection: 'row',
        marginLeft: 100
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover' // Maintain aspect ratio and fill the container
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
//         paddingTop: 12,
        fontSize: 25,
    },
});

const Profile = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={profilePic} style={styles.image}/>
            </View>
            <Items imageName={edit_icon} name="Edit profile"/>
            <Items imageName={mygiveaways} name="My Giveaways"/>
            <Items imageName={favorites} name="Favorites"/>
            <Items imageName={share} name="Share"/>
            <Items imageName={logout} name="Logout"/>
        </View>
    );
};

export default Profile;

type optionProps = {
    name: string,
    imageName: string,
}

const Items = (props: optionProps) => {

    const handlePress = () => {
        Alert.alert("Button pressed");
    };

    return (
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.options}>
            <Image source={props.imageName} style={styles.iconLeft}/>
            <Text style={styles.iconText}>{props.name}</Text>
            <Image source={require('./icons/next.png')} style={styles.iconRight}/>
        </View>
    </TouchableOpacity>
    );
};