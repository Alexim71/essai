import React, { useState }  from 'react';

import {ScrollView, Text, View, StyleSheet, Alert,Keyboard, Image, useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from "../../../source/components/Input";
import Button from "../../../source/components/Button";
import {ROUTES, COLORS, IMAGES} from '../../Constants';
import Loader from '../../../source/components/Loader';
import ImagesHeader from '../../../source/components/ImagesHeader';

import { Modal, Portal, PaperProvider } from 'react-native-paper';

import ModalLogin from '../../../source/components/ModalLogin';


import {useForm, Controller} from 'react-hook-form';

export default function LoginScreen({ navigation }) {

 const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const {height} = useWindowDimensions(); 


  const onForgotPassword  =() => {
    navigation.navigate(ROUTES.FORGOT_PASSWORD);
  };

  const onTypeUser  = () => {
    navigation.navigate(ROUTES.TYPE_USER);
  };

  const onSession = () => {
  navigation.navigate(ROUTES.HOME);
    };

     const [visible, setVisible] = React.useState(false);

      const showModal = () => setVisible(true);
      const hideModal = () => setVisible(false);
      const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};


    /* Function validate */

     const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        }
        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        }
        if (isValid) {
          login();
        }
      };

        const login = () => {
          setLoading(true);
          setTimeout(async () => {
            setLoading(false);
            let userData = await AsyncStorage.getItem('userData');
            if (userData) {
              userData = JSON.parse(userData);
              if (
                inputs.email == userData.email &&
                inputs.password == userData.password
              ) {
                navigation.navigate(ROUTES.HOME);
                AsyncStorage.setItem(
                  'userData',
                  JSON.stringify({...userData, loggedIn: true}),
                );
              } else {
                showModal();
              }
            } else {
              showModal();
            }
          }, 3000);
        };

  const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };

   const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };







  return (
  <>
   <Loader visible={loading} />

    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text style = {{fontSize : 25, fontWeight : 'bold'}}> La connexion a échoué</Text>
        <Text>Vérifier votre adresse e-mail et votre mot de passe.</Text>
       <Button
           text= "Mot de passe oublié ?"
           onPress={onForgotPassword}
           type= "TERTIARY"
         />
        </Modal>
      </Portal>
    <ScrollView style={styles.container}>

        <ImagesHeader/>

       <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
          keyboardType={"email-address"}
       />

       <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />

        <Button
          text= "Mot de passe oublié ?"
          onPress={onForgotPassword}
          type= "TERTIARY"
        />
      <Button
      onPress={validate}
      text = "Ouvrir une session"
      type = "PRIMARY"

      />
      </ScrollView>
     <View style = {{ flex: 0.1,backgroundColor: COLORS.blueSoft, position: 'relative', flexDirection: 'column'}}>
     <Text  style = {{ color: '#3B71F3',fontWeight:'normal',fontSize:16,textAlign:'center',}}>
      Pas encore enregistré(e) ?
      </Text>
      <Button
       onPress={onTypeUser}
      text="Créer un nouveau compte."
      type = "TERTIARY2"
      />
     </View>
     </PaperProvider>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.blueSoft,
  },
  image: {
    width:150,
    height: 200,
  },
});

