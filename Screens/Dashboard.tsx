import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "./Home";
import Search from "./Search";
import Profile from "./Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return (
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                 name="Home"
                 component={Home}
                 options={{
                    tabBarIcon: () => (
                        <Image source={require('./icons/Home.png')} style={{width: 24, height: 24}}/>
                    ),
                 }}
                />
                <Tab.Screen
                 name="Search" 
                 component={Search}
                 options={{
                    tabBarIcon: () => (
                        <Image source={require('./icons/search.png')} style={{width: 24, height: 24}}/>
                    ),
                 }}
                 />
                <Tab.Screen
                 name="Profile" 
                 component={Profile}
                 options={{
                    tabBarIcon: () => (
                        <Image source={require('./icons/profile.png')} style={{width: 24, height: 24}}/>
                    ),
                 }}
                 />
            </Tab.Navigator>
    );
};

export default Dashboard;