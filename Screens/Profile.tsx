import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking } from "react-native";
import edit_icon from "./icons/edit.png";
import mygiveaways from "./icons/mygiveaways.png";
import favorites from "./icons/favorites.png";
import share from './icons/share.png';
import logout from './icons/logout.png';
import profilePic from "./images/profilePicture.jpeg";
import {launchImageLibrary} from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUsername } from './UsernameContext';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

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
    view: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        color: 'black',
    },
    email: {
        color: 'black',
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

const Profile = ({navigation}) => {

    const [profileData, setProfileData] = useState('');
    const [imageURL, setImageURL] = useState('');
    const {userName} = useUsername();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{ const getProfile = async ()=>{
          try{

              const queryOutput = await firestore()
                                      .collection('Profiles')
                                      .doc(userName)
                                      .get();

              const fetchedProfile = { email: queryOutput.id, ...queryOutput.data() };
              setProfileData(fetchedProfile);
          }
          catch (error) {
              Alert.alert(error.message);
          }
    }

    const unsubscribe = navigation.addListener('focus',()=>{
          getProfile();
      });

      return unsubscribe;
    },[]);

    useEffect(() => {
        setImageURL(profileData.imageURL);
        setName(profileData.name);
        setEmail(profileData.email);
     }, [profileData]);

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                {imageURL?(<Image source={{uri:imageURL}} style={styles.image} />):(
                                     <Image source={profilePic} style={styles.image}/>
                            )}
            </View>
            <View style={styles.view}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <Items navigation={navigation} imageName={edit_icon} name="Edit profile"/>
            <Items navigation={navigation} imageName={mygiveaways} name="My Giveaways"/>
            <Items navigation={navigation} imageName={favorites} name="Privacy Policy"/>
            <Items navigation={navigation} imageName={share} name="Share"/>
            <Items navigation={navigation} imageName={logout} name="Logout"/>
        </View>
    );
};

export default Profile;

type optionProps = {
    name: string,
    imageName: string,
}

const Items = (props: optionProps) => {

    const {userName,setUserName,password,setPassword} = useUsername();

    const handlePress = (name) => {
        if (name == "Edit profile"){
            props.navigation.navigate('EditProfile')
        }
        else if (name == "My Giveaways"){
            props.navigation.navigate('MyGiveaways')
        }
        else if (name == "Privacy Policy"){
            // props.navigation.navigate('Favorites')
            const url = 'https://www.freeprivacypolicy.com/live/e9f144f6-15c0-45ba-a1f9-d4bd63684a14';
            Linking.openURL(url)
            .then(() => console.log("Success"))
            .catch(error => Alert.alert('Unable to open link', error, [{text: 'Dismiss'}]))
        }
        else if (name == "Share"){
            // props.navigation.navigate('Share')
            const url = 'https://play.google.com/store/search?q=giveaway&c=apps&hl=en_US&gl=US';
            Linking.openURL(url)
            .then(() => console.log("Success"))
            .catch(error => Alert.alert('Unable to open link', error, [{text: 'Dismiss'}]))
        }
        else if (name == "Logout"){
            setUserName('')
            setPassword('')
            props.navigation.navigate('Login')
        }
    };

    return (
    <TouchableOpacity onPress={() => handlePress(props.name)}>
        <View style={styles.options}>
            <Image source={props.imageName} style={styles.iconLeft}/>
            <Text style={styles.iconText}>{props.name}</Text>
            <Image source={require('./icons/next.png')} style={styles.iconRight}/>
        </View>
    </TouchableOpacity>
    );
};