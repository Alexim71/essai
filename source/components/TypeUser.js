

import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import COLORS from '../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ImagesHeader({text, onPress = () => {}, iconName}) {
    return(
      <Pressable style={{alignItems: 'center', margin: 'auto',}}
              onPress={onPress}>
                <Icon
                  name={iconName}
                  style={{color: '#1b02f7', fontSize: 100, marginRight: 10}}
                />
                <Text style={styles.headerText}>{text}</Text>
      </Pressable>
    )
};

const styles = StyleSheet.create({
  headerText: {
      margin: 10,
      fontSize: 25,
      color: '#000000',
      textAlign: 'center',
      elevation: 4
    },
});