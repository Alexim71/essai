
/*
Entreprise CompuConsult
Auteur : Pierre Chrislin DORIVAl
*/

import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import COLORS from '../Constants/Colors';


/* ****************************************
           ___ COMPONENTS BUTTON_____
   **************************************** */


const Button = ({text, onPress = () => {}, type = "PRIMARY"}) => {
  return (
    <Pressable
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container,styles[`container_${type}`],]} compact >
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles= StyleSheet.create({
     container: {
         marginVertical: 3,
         borderRadius:20,
         margin:30,
         padding:13 ,
         height: 55,
     },
     container_PRIMARY: {
        backgroundColor: COLORS.blue,
     },

     container_TERTIARY2: {
     marginTop:0,
     paddingTop: 0,},
     text: {
        color: COLORS.white,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',

     },
     text_TERTIARY:{
         color: COLORS.blue,
         fontWeight:'normal',
         fontSize:16,
         textAlign:'right',
     },

     text_TERTIARY2:{
         color: COLORS.blue,
         fontWeight:'normal',
         fontSize:16,
         textAlign:'center',
         position: 'relative',
         textDecorationLine: 'underline',
     },

 });

export default Button;


