import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../Constants';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Home!</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
