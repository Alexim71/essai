import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  SettingsDetail from '../../../source/Screens/SettingsDetail';
import Settings from '../../../source/Screens/Settings';
import {ROUTES} from '../../Constants';

const Stack = createStackNavigator();

function SettingsNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
