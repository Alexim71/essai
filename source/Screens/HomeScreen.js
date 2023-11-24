

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import  DashboardHeader from '../components/DashboardHeader';
import { COLORS, LISTS }  from '../Constants';

const HomeScreen = ({navigation}) => {
  const Card = ({place}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsCourse', place)}>
        <ImageBackground style={style.cardImage} source={place.image}>
        </ImageBackground>
        <View style={{ alignItems:'center'}}>
          <Text
            style={{
            marginVertical:10,
              color: COLORS.grey,
              fontSize: 20,
            }}>
            {place.name}
          </Text>
          </View>

      </Pressable>
    );
  };

    const SessionsCard = ({place}) => {
      return (
        <Pressable
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Details', place)}>
          <ImageBackground style={style.rmCardImage} source={place.imageSession}>
          </ImageBackground>
          <Text
            style={{
              color: COLORS.black,
               width: width / 2,
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.notion}
            </Text>
            <Text
              style={{
              marginVertical:10,
               width: width / 2,
                color: COLORS.grey,
                fontSize: 20,
              }}>
              {place.chapitre} par {place.teacher}
            </Text>

        </Pressable>
      );
    };

    return (
   <>
    <View style={style.header}>
          <StatusBar translucent={false} backgroundColor={COLORS.blueSoft} />

        <Icon name="sort" size={28} color={COLORS.white}  onPress={() => navigation.openDrawer()} />
        <Icon name="account-circle" size={40} color={COLORS.blue} />
    </View>
    < ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style = {{position: 'relative'}}>
      <DashboardHeader/>
      </View>
      <View>
      <Text style={style.sectionTitle}>Cours</Text>
      <FlatList
        contentContainerStyle={{paddingLeft: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={LISTS}
        renderItem={({item}) => <Card place={item} />}
      />
      <Text style={style.sectionTitle}>Sessions</Text>
      <FlatList
        contentContainerStyle={{paddingLeft: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={LISTS}
        renderItem={({item}) => <SessionsCard place={item} />}
      />
    </View>
    </ ScrollView>
    </>
    );
};

export default HomeScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.blueSoft,
  },
  headerTitle: {
    color: COLORS.black,
    fontSize: 23,
  },
  headerTitleName: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.blueSoft,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    elevation:16,
  },
  cardImage: {
    height: 180,
    width: width / 3,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 15,
    shadowOffset: {
    	width: 0,
    	height: 12,
    },
    elevation:16,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 16.00,
  },
  rmCardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
  },
});
