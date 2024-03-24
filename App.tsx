/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Dashboard from './Screens/Dashboard';
import ItemsList from './Screens/ItemsList';
import Category from './Screens/Categories';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}/>
                <Stack.Screen name="Signup" component={Signup} options={{title: 'Signup'}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
                <Stack.Screen name='ItemsList' component={ItemsList}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;