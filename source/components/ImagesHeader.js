import React, { useState }  from 'react';

import { Pressable,Image, StyleSheet } from 'react-native';
import {IMAGES} from '../Constants';

export default function ImagesHeader({ navigation }) {
    return(
      <Pressable style={{alignItems: 'center', margin: 'auto',}}
              onPress={() => {}}>
              <Image
                style={styles.image}
                source={IMAGES.Logo}
                accessibilityLabel={'SMARTSCHOOL Logo'}
                resizeMode='cover'
              />
      </Pressable>
    )
};

const styles = StyleSheet.create({
  image: {
    width:150,
    height: 200,
  },
});

