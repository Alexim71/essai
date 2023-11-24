import React from 'react';
import {COLORS, ROUTES} from '../../../source/Constants';
import BottomTabNavigator from './BottomTabNavigator';
import Calendar from '../../../source/Screens/Calendar.js';
import Notifications from '../../../source/Screens/Notifications.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from '../../components/CustomDrawer.js';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.blue,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="account-tie" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.CALENDAR_DRAWER}
        component={Calendar}
        options={{
          title: 'Calendar',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="account-tie" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="account-tie" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
