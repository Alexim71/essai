import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../Screens/HomeScreen';
//import CreateCourse from '../../../source/Screens/createScreens/CreateCourse.js';
import Schedule from '../../Screens/Schedule';
import Calendar from '../../Screens/Calendar';
import DetailsScreen from '../../Screens/DetailsScreen';
import ExploreScreen from '../../Screens/ExploreScreen';
import CalendarListScreen from '../../Screens/CalendarListScreen';
import NewCalendarListScreen from '../../Screens/NewCalendarListScreen';
import TimelineCalendarScreen from '../../Screens/TimelineCalendarScreen';NewCalendarListScreen
import ProfileScreen from '../../Screens/ProfileScreen';
import DetailsCourse from '../../Screens/DetailsCourse';
import Alarm from '../../Screens/Alarm';
import {COLORS, ROUTES} from '../../Constants';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (


               <Tab.Navigator
                 initialRouteName="Home"
                 screenOptions={{
                   tabBarActiveTintColor: ROUTES.blue,
                   headerShown: false
                 }}
               >
                 <Tab.Screen
                   name="Calendrier"
                       component={Schedule}
                   options={{
                     tabBarLabel: 'Calendrier',
                     tabBarIcon: ({ color, size }) => (
                       <MaterialCommunityIcons name="calendar" color={color} size={25} />
                     ),
                   }}
                 />
                 <Tab.Screen
                   name="Home"
                   component={CourseStackScreen}
                   options={{
                     tabBarLabel: 'Home',
                     tabBarIcon: ({ color, size }) => (
                       <MaterialCommunityIcons name="home" color={color} size={25} />
                     ),
                   }}
                 />
                 <Tab.Screen
                   name="Message"
                   component={ExploreScreen}
                   options={{
                     tabBarLabel: 'Message',
                     tabBarIcon: ({ color, size }) => (
                       <MaterialCommunityIcons name="email" color={color} size={25} />
                     ),
                   }}
                 />
               </Tab.Navigator>



);

export default MainTabScreen;
/*
const Drawer = createDrawerNavigator();


 const CalendarStackScreen = ({navigation}) => (
    <Drawer.Navigator
                 screenOptions={{
                   tabBarActiveTintColor: ROUTES.blue,
                   headerShown: false
                 }}>
      <Drawer.Screen name="Calendrier" component={Schedule} />
      <Drawer.Screen name="Notifications" component={ExploreScreen} />
    </Drawer.Navigator>
  );
*/


const CourseStack = createStackNavigator();

const CourseStackScreen = ({navigation}) => (
< CourseStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CourseStack.Screen name="HomeCourse" component={HomeScreen} />
        <CourseStack.Screen name="DetailsCourse" component={DetailsCourse} />

        <CourseStack.Screen name="Alarm" component={Alarm} />
</ CourseStack.Navigator>
);
