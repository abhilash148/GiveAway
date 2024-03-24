import {View, Text, StyleSheet} from 'react-native';
import {useEffect} from 'react';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:"center"
    },

    landing:{
        color:"dodgerblue",
        fontSize:70,
        fontWeight:"bold",
        fontStyle:"italic"
    }
})

const LandingPage = ({navigation}) => {

    useEffect(()=>{
            const timer = setTimeout(()=>{
                navigation.navigate('Login')
            },3000)
            return ()=>clearTimeout(timer) });

    return (<View style={styles.container}><Text style={styles.landing}>GIVEAWAY</Text></View>);
}

export default LandingPage;