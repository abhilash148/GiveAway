import {View,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

const Favorites = ()=>{
    return <View style={styles.container}><Text>Favorites</Text></View>
}

export default Favorites