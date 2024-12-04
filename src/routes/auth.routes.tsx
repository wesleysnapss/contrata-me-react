import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';
import ConfirmEmail from '../pages/ConfirmEmail';
import OnBoarding from '../pages/OnBoarding';
import ChooseProfileType from '../pages/ChooseProfileType';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    const options = {
        gestureEnabled: false,
        animationEnabled: true,
    };

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
                cardStyle: {
                    backgroundColor: 'transparent',
                }
            }}
        >

            <Screen
                name="SplashScreen"
                component={SplashScreen}
            />

            <Screen
                name="OnBoarding"
                component={OnBoarding}
            />

            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="Register"
                component={Register}
            />

            <Screen
                name="ConfirmEmail"
                component={ConfirmEmail}
            />

            <Screen
                name="ChooseProfileType"
                component={ChooseProfileType}
            />

            <Screen
                name="Main"
                component={Main}
            />
        </Navigator>
    )
}