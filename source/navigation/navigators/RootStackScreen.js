

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../../../source/Screens/SplashScreen';
import DetailsCourse from '../../../source/Screens/DetailsCourse';
import SignInScreen from '../../../source/Screens/SignInScreen';
import SignUpScreen from '../../../source/Screens/SignUpScreen';
import ChangePasswordScreen from '../../Screens/ChangePasswordScreen';

import  ForgotPasswordScreen from '../../../source/Screens/PasswordScreens/ForgotPasswordScreen';
import UserTypeScreen from '../../../source/Screens/UserTypeScreen/UserTypeScreen';
import{ROUTES} from '../../Constants'
//import LoginScreen from '../../../source/screens/LoginScreen/LoginScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="DetailsCourse">
        <RootStack.Screen name="DetailsCourse" component={DetailsCourse}/>
    </RootStack.Navigator>
);

export default RootStackScreen;