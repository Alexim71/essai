


/**
 *
 *
 *
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator , StatusBar} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../../Constants/Colors';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { DrawerContent } from './DrawerContent';

//import CustomDrawer from '../../Components/CustomDrawer';

import MainTabScreen from './MainTabScreen';
import HomeScreen from '../../Screens/HomeScreen';
import Parametres from '../../Screens/Parametres';
import SupportScreen from '../../Screens/SupportScreen';
import SettingsScreen from '../../Screens/SettingsScreen';
import BookmarkScreen from '../../Screens/BookmarkScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import CreateLevel from '../../../source/Screens/createScreens/CreateLevel.js';
import CreateCourse from '../../../source/Screens/createScreens/CreateCourse';
//import Jitsi from '../../../source/services/PresentationCourses/Jitsi.js';


import RootStackScreen from '../../../source/navigation/navigators/RootStackScreen.js';

import {ROUTES} from '../../../source/Constants';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const Dashboard = () => {
 /*  const [isLoading, setIsLoading] = React.useState(true);
   const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);



  const CustomDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      ...NavigationDefaultTheme.colors,
      background: ROUTES.blueSoft,
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
      background: ROUTES.blueSoft,
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

*/
  return (

        <Drawer.Navigator screenOptions={{ headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="CreateCourse" component={ CreateCourse} />
          <Drawer.Screen name="CreateLevel" component={ CreateLevel} />

          <Drawer.Screen name="Parametres" component={Parametres} />

         {/* <Drawer.Screen name="Jitsi" component={Jitsi} /> */}
         
        </Drawer.Navigator>


  );
}

export default Dashboard;
