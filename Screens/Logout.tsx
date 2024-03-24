import {View,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

const Logout = ()=>{
    return <View style={styles.container}><Text>Logout</Text></View>
}

export default Logout