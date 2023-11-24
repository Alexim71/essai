


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import { COLORS }  from '../Constants';


const DashboardHeader = () => {
                 return(
                 <>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                      style={{
                        backgroundColor: COLORS.blueSoft,
                        height: 120,
                        paddingHorizontal: 20,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={style.headerTitle}>Bienvenue à nouveau </Text>
                        <Text style={style.headerTitleName}>John</Text>
                      </View>
                    </View>
                  </ScrollView>

                 </>
                 );
 }

 export default DashboardHeader;

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

});