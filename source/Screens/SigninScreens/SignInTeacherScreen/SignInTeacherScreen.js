import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {ScrollView, Text, Alert, StyleSheet, TextInput, TouchableOpacity,View, Image, useWindowDimensions, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../../../source/Constants/Colors';
import Button from '../../../../source/components/Button';
import Input from '../../../../source/components/Input';
import Loader from '../../../../source/components/Loader';
import ImagesHeader from '../../../../source/components/ImagesHeader';

import {ROUTES} from '../../../Constants';

export default function SignInTeacher({ navigation }) {

    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);


    /* function validate */

      const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
          handleError('Please input a valid email', 'email');
          isValid = false;
        }

        if (!inputs.fullname) {
          handleError('Please input fullname', 'fullname');
          isValid = false;
        }

        if (!inputs.phone) {
          handleError('Please input phone number', 'phone');
          isValid = false;
        }

        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        } else if (inputs.password.length < 5) {
          handleError('Min password length of 5', 'password');
          isValid = false;
        }

        if (inputs.password !== inputs.confirmPassword) {
           handleError('Password is not same', 'confirmPassword');
           isValid = false;
        }

        if (isValid) {
          register();
        }
      };

       const register = () => {
          setLoading(true);
          setTimeout(() => {
            try {
              setLoading(false);
              AsyncStorage.setItem('userData', JSON.stringify(inputs));
              navigation.navigate(ROUTES.LOGIN);
            } catch (error) {
              Alert.alert('Error', 'Something went wrong');
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
    <ScrollView style={styles.container}>
      <ImagesHeader/>
      <View style={{justifyContent:'center', alignItems: 'center'}}>
      <Text style={{color: COLORS.black, fontSize: 30}}>Création de compte</Text>
      </View>
          <Input
          keyboardType="email-address"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Input
              onChangeText={text => handleOnchange(text, 'confirmPassword')}
              onFocus={() => handleError(null, 'confirmPassword')}
              iconName="lock-outline"
              placeholder="Confirm your password"
              error={errors.confirmPassword}
              password
          />

          <Button
          text="Créer mon compte"
          type = "PRIMARY"
          onPress={validate} />

          <Button
            text="Already have account ?Login"
            type = "TERTIARY"
            onPress={onSignInPressed} />

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B5FE',
  },
   image: {
    width:150,
    height: 150,
  },
});

