
import * as React from 'react';
import { Text, View,ScrollView,  Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import { COLORS, LISTS }  from '../../../source/Constants';
import Week1 from '../PresentationCourses/Week1';

const TabWeek = createMaterialTopTabNavigator();


function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


export default function HomeCourse(){
    return(
    <>

    <TabWeek.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#000',

        tabBarLabelStyle: { fontSize: 15 },
        tabBarScrollEnabled: false,
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <TabWeek.Screen
        name="'Semaine 1"
        component={Week1}
        options={{ tabBarLabel: 'Semaine 1'}}
      />
      <TabWeek.Screen
        name="'Semaine 2"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Semaine 2' }}
      />
      <TabWeek.Screen
        name="'Semaine 3"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Semaine 3' }}
      />
      <TabWeek.Screen
        name="'Semaine 4"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Semaine 4' }}
      />
    </TabWeek.Navigator>
    </>
  );
}