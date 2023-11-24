import React, { useState } from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity,  Image} from 'react-native';
import{ROUTES} from '../../Constants';


import CustomInput from "../../../source/components/CustomInput";
import CustomButton from "../../../source/components/CustomButton";


export default function ForgotPasswordScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');




  const onChangePassword  =() => {
    navigation.navigate(ROUTES.CHANGE_PASSWORD);
  };

  

  return (
    <ScrollView style={styles.container}>
       
         <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => {}}>
        <Image
          style={styles.image}
          //source={require('../../../../assets/original.png')}
          accessibilityLabel={'SMARTSCHOOL Logo'}
          resizeMode='cover'
        /> 
        <Text style={{fontWeight: 'bold', fontSize: 26}}>Entrez votre email</Text>
      </TouchableOpacity>
      
      
       <CustomInput
      placeholder="email"
      value={email}
      setValue={onChangeEmail}
      autCapitalize={"none"}
      keyboardType={"email-address"}
      />
      

      <CustomButton
      onPress={onChangePassword}
      text = "Envoyer" 
      type="PRIMARY"
      />
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B5FE',
  },
  
  regularText: {
    fontSize: 20,
    marginVertical: 3,
    padding: 20,
    color: '#0000FF',
    textAlign: 'right',
  },
  inputBox: {
    height: 40,
    margin: 15,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    margin: 20,
    marginVertical: 8,
    backgroundColor: '#0000FF',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  buText: {
    fontSize: 20,
    color: '#0000FF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footerText: {
    fontSize: 20,
    color: '#0000FF',
    textAlign: 'center',
    paddingTop:100,
    textDecorationLine:'none',
  },
  image: {
    width:150,
    height: 200,
  },
});

