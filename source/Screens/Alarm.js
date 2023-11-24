import React, { useState } from 'react';

//import all the components we are going to use
import { FlatList, View, Text, ScrollView, StyleSheet } from 'react-native';
import SwitchButton from'../components/SwitchButton';
import AlarmTimeMode from '../components/AlarmTimeMode';

import Icon from 'react-native-vector-icons/MaterialIcons';


const Alarm = ({navigation: { goBack }}) => {
  const [alarm, setAlarm] = useState(false);

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  return (
  <>
   <View style={{backgroundColor:'white', flexDirection: 'row',justifyContent:'flex-start', padding: 20, paddingHorizontal:10}}>
        <Icon name="chevron-left" size={40} color={'black'} onPress={() => goBack()} />
       <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>
            Rappels
       </Text>
   </View>

    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center'}}>
        <View>
        <AlarmTimeMode day=" Dimanche"/>
        </View>
        <SwitchButton/>
        </View>
        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row', elevation: 4}}>
        <View>
        <AlarmTimeMode day="Lundi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row'}}>
        <View>
        <AlarmTimeMode day=" Mardi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row'}}>
        <View>
        <AlarmTimeMode day=" Mercredi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row'}}>
        <View>
        <AlarmTimeMode day=" Jeudi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row'}}>
        <View>
        <AlarmTimeMode day=" Vendredi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
       <View style = {{justifyContent: 'space-between' , flexDirection: 'row'}}>
        <View>
        <AlarmTimeMode day=" Samedi"/>
        </View>
        <SwitchButton/>
        </View>

        <ItemSeparatorView/>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Alarm;