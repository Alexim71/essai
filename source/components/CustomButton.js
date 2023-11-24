import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton =({onPress, text, footerText, type = "PRIMARY"}) => {

    return (
        <Pressable
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
        ]} compact>
               
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>

        </Pressable>
    );
};

const styles= StyleSheet.create({
    container: {
        marginVertical: 3,
        borderRadius:20,
        margin:30,
        padding:13 ,
    },
    container_PRIMARY: {
       backgroundColor:'#3B71F3',
    },

    container_TERTIARY: {},
    text: {
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       textAlign:'center',
       
    },
    text_TERTIARY:{
        color: '#3B71F3',
        fontWeight:'normal',
        fontSize:16,
        textAlign:'right',
    },

    text_TERTIARY2:{
        color: '#3B71F3',
        fontWeight:'normal',
        fontSize:16,
        textAlign:'center',
        position: 'relative',
    },

});

export default CustomButton;
