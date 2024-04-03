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
import Landing from './Screens/LandingPage';
import Profile from './Screens/Profile';
import EditProfile from './Screens/EditProfile';
import MyGiveaways from './Screens/MyGiveaways';
import Favorites from './Screens/Favorites';
import Share from './Screens/Share';
import Logout from './Screens/Logout';
import NewGiveaway from './Screens/NewGiveaway';
import { UsernameProvider } from './Screens/UsernameContext';
import ItemDescription from './Screens/ItemDescription';
import ItemsList from './Screens/ItemsList';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
    <UsernameProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={Landing} options={{title: 'Landing', headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerShown: false}}/>
                <Stack.Screen name="Signup" component={Signup} options={{title: 'Signup'}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={Profile} option={{title:'Profile'}}/>
                <Stack.Screen name="EditProfile" component={EditProfile} option={{title:'EditProfile'}}/>
                <Stack.Screen name="MyGiveaways" component={MyGiveaways} option={{title:'MyGiveaways'}}/>
                <Stack.Screen name="Favorites" component={Favorites} options={{title:'Favorites'}}/>
                <Stack.Screen name="Share" component={Share} options={{title:'Share'}}/>
                <Stack.Screen name="Logout" component={Logout} option={{title:'Logout'}}/>
                <Stack.Screen name="NewGiveaway" component={NewGiveaway} option={{title:'NewGiveaway'}}/>
                <Stack.Screen name="ItemDescription" component={ItemDescription} option={{title:'ItemDescription'}}/>
                <Stack.Screen name="ItemsList" component={ItemsList} option={{title:'ItemsList'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </UsernameProvider>
    );
};

export default App;