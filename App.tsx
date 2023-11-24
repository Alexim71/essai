import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Dashboard  from './source/navigation/navigators/Dashboard.js';
/* import files*/
import RootNavigator from './source/navigation/navigators/RootNavigator';
import MainTabScreen from './source/navigation/navigators/MainTabScreen';
export default function App() {
  return (
    <>
    <NavigationContainer>
        <Dashboard/>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

