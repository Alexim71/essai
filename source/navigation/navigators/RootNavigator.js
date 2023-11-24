import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ROUTES} from '../../Constants';
import Loader from'../../components/Loader';

/* import files*/

import  LoginScreen from '../../../source/Screens/LoginScreen/LoginScreen.js';

import SignInEstablishmentScreen from '../../../source/Screens/SigninScreens/SignInEstablishmentScreen/SignInEstablishmentScreen';

import SignInTeacherScreen from '../../../source/Screens/SigninScreens/SignInTeacherScreen/SignInTeacherScreen';

import SignInStudentScreen from '../../../source/Screens/SigninScreens/SignInStudentScreen/SignInStudentScreen';

import ChangePasswordScreen from '../../Screens/ChangePasswordScreen';

import  ForgotPasswordScreen from '../../../source/Screens/PasswordScreens/ForgotPasswordScreen';

//import DrawerNavigator from './DrawerNavigator';

import Dashboard  from './Dashboard';
import MainTabScreen  from './MainTabScreen';

import RootStackScreen  from './RootStackScreen';

import Home from '../../../source/Screens/HomeScreen';

import UserTypeScreen from '../../../source/Screens/UserTypeScreen/UserTypeScreen';





const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
      setTimeout(() => {
        authUser();
      }, 2000);
    }, []);

      const authUser = async () => {
        try {
          let userData = await AsyncStorage.getItem('userData');
          if (userData) {
            userData = JSON.parse(userData);
            if (userData.loggedIn) {
              setInitialRouteName(ROUTES.HOME);
            } else {
              setInitialRouteName(ROUTES.LOGIN);
            }
          } else {
            setInitialRouteName(ROUTES.LOGIN);
          }
        } catch (error) {
          setInitialRouteName(ROUTES.LOGIN);
        }
      };

  return (
    <>
      {!initialRouteName ? (
          <Loader visible={true} />
      ) : (
        <View style={styles.container}>
           <StatusBar  hidden = {true}  translucent = {true}/>

          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRouteName} >

           <Stack.Screen name= {ROUTES.LOGIN} component={LoginScreen} />

            <Stack.Screen name={ROUTES.SIGN_STUDENT} component={SignInStudentScreen} />

            <Stack.Screen name={ROUTES.SIGN_ESTABLISHMENT} component={SignInEstablishmentScreen} />

            <Stack.Screen name={ROUTES.SIGN_TEACHER} component={SignInTeacherScreen} />

            <Stack.Screen name={ROUTES.TYPE_USER} component={UserTypeScreen} />

            <Stack.Screen name={ROUTES.CHANGE_PASSWORD} component={ChangePasswordScreen} />

            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />

             <Stack.Screen name={ROUTES.HOME} component={Dashboard} />
          </Stack.Navigator>

        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

