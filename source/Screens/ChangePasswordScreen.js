import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import{ROUTES} from '../Constants';


export default function ChangePasswordScreen({ navigation }) {
  
  const [password, onChangePassword] = useState('');
  const [Confirmpassword, onChangeconfirmPassword] = useState('');

  const onChange  = () => {
      navigation.navigate(ROUTES.LOGIN);
    };

  return (
    <ScrollView style={styles.container}>
       
         <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => {}}>
        <Image
          style={styles.image}
          //source={require('../../../assets/original.png')}
          accessibilityLabel={'SMARTSCHOOL Logo'}
          resizeMode='cover'
        /> 
        <Text style={{fontWeight: 'bold', fontSize: 26}}>Changez votre mot de passe</Text>
      </TouchableOpacity>


        <CustomInput
            placeholder="Mot de passe"
            value={password}
            setValue={onChangePassword}
            keyboardType={"default"}
             secureTextEntry={true}
            />
        <CustomInput
            placeholder="Confirmez votre Mot de passe"
            value={password}
            setValue={onChangeconfirmPassword}
            keyboardType={"default"}
             secureTextEntry={true}
            />


       <CustomButton
             onPress={onChange}
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

