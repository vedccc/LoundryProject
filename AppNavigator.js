import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from './Screens/Carousal';
import Login from './Screens/Login';
import FirstScreen from './Screens/firstScreen';
import ForgotPassword from './Screens/ForgotPassword';
import SignupScreen from './Screens/Signup';
import BottomTab from './BottomTabBar';
import Home from './Screens/Home';
import NearBy from './Screens/NearBy';
import Booking from './Screens/Booking';
import Offers from './Screens/Offers';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} >

                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}

                />

                <Stack.Screen
                    name="Carousel"
                    component={Carousel}

                />

                <Stack.Screen
                    name="Login"
                    component={Login}

                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}

                />

                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}

                />

                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}

                />

                <Stack.Screen
                    name="Home"
                    component={Home}

                />

                <Stack.Screen
                    name="NearBy"
                    component={NearBy}

                />

                <Stack.Screen
                    name="Booking"
                    component={Booking}

                />

                <Stack.Screen
                    name="Offers"
                    component={Offers}

                />

                <Stack.Screen
                    name="Profile"
                    component={Profile}

                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;