import * as React from 'react';
import { ScrollView, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ROUTES} from '../../Constants';
import ImagesHeader from '../../components/ImagesHeader';
import TypeUser from '../../components/TypeUser';

export default function UserTypeScreen({ navigation }) {

    const onSignInStudent = () => {
        navigation.navigate(ROUTES.SIGN_STUDENT);
    };
   const onSignInTeacher = () => {
      navigation.navigate(ROUTES.SIGN_TEACHER);
   };
   const onSignInEstablishment = () => {
        navigation.navigate(ROUTES.SIGN_ESTABLISHMENT);
   };


  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <ImagesHeader/>
      <Text style={styles.headerText}>Choisissez votre type d{"'"} utilisateur</Text>

        <TypeUser
               onPress={onSignInStudent}
               iconName="school"
               text = "Apprenant"
        />

        <TypeUser
               onPress={onSignInTeacher}
               iconName="account-tie"
               text = "Enseignant"
        />
      

       <TypeUser
        onPress={onSignInEstablishment}
        iconName="home-city"
        text = "Etablissement"
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#77B5FE',
    flex: 1,
    display: 'flex',
    
  },
  headerText: {
    margin: 20,
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width:150,
    height: 150,
  },
});