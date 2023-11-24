import React, {useState} from 'react';
import { Text, View,ScrollView,  Dimensions, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import { COLORS, LISTS }  from '../Constants';
import HomeCourse from '../../source/services/PresentationCourses/HomeCourse.js';
import Notes from '../../source/services/PresentationCourses/Notes';
import Jitsi from '../../source/services/PresentationCourses/Jitsi';


function ProfileScreen({navigation}) {
const [jointMeeting, setJoinMeeting] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


         {jointMeeting ? (
         <Jitsi/>
         ) : (
        <Pressable>
        <Button
        onPress={() => setJoinMeeting(true)}
            title="Participer au cours"

        />
        </Pressable>
        )}
    </View>
  );
}



export default function DetailsCourse({ navigation: { goBack }, navigation }) {


  return (
   <View style={{flex:1}}>
   <View style={{backgroundColor:COLORS. blueSoft, flexDirection: 'row',justifyContent:'space-between', padding: 20, paddingHorizontal:10}}>
        <Icon name="chevron-left" size={40} color={COLORS.white} onPress={() => goBack()} />
       <Text style={{fontSize:25, color:COLORS.white}}>
            Introduction en Analyse Combinatoire
       </Text>
        <Icon name="alarm" size={40} color={COLORS.white}  onPress={() => navigation.navigate('Alarm')}/>

   </View>
   <TabDashboard/>
   </View>

  );
}



const Tab = createMaterialTopTabNavigator();
function TabDashboard(){
    return(

    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: COLORS. blueSoft },
      }}
    >
      <Tab.Screen
        name="Course"
        component={HomeCourse}
        options={{ tabBarLabel: 'Page d\'acceuil' }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{ tabBarLabel: 'Notes' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Forums' }}
      />
      <Tab.Screen
        name="Infos"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Infos' }}
      />
    </Tab.Navigator>
  );
}


