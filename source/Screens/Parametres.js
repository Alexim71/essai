import React, { useState } from 'react';

//import all the components we are going to use
import { FlatList, View, Text, ScrollView, StyleSheet } from 'react-native';
import SwitchButton from'../components/SwitchButton';
import AlarmTimeMode from '../components/AlarmTimeMode';

import Icon from 'react-native-vector-icons/MaterialIcons';


import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Parametres = ({navigation: { goBack }}) => {
  const [alarm, setAlarm] = useState(false);

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{ height: 5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  return (
  <>
   <View style={{backgroundColor:'white', flexDirection: 'row',justifyContent:'flex-start', padding: 20, paddingHorizontal:10}}>
        <Icon name="chevron-left" size={40} color={'black'} onPress={() => goBack()} />
       <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>
            Paramètres
       </Text>
   </View>

    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={{margin: 40}}>
      </View>
       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>

      <View style={{margin: 40}}>
      <Text> Notification </Text>
      </View>


       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>
        <ItemSeparatorView/>
        <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
                <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
                <View style = {{marginLeft:10}}>
                <Icons  name="calendar-sync-outline" size={30} color={'black'} />
                </View>
                <View style = {{marginLeft:10}}>
                <Text>Synchroniser avec mon calendrier</Text>
                <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
                </View>
                </View>

                <SwitchButton/>
                </View>


      <View style={{margin: 40}}>
      <Text>Telechargement</Text>
      </View>



       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
            <View style = {{ margin:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
               <View style = {{marginLeft:10}}>
               <Icons  name="calendar-sync-outline" size={30} color={'black'} />
               </View>
            <View style = {{marginLeft:10}}>
              <Text>Synchroniser avec mon calendrier</Text>
              <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
            </View>
        </View>

        <SwitchButton/>
        </View>


      <View style={{margin: 40}}>
      <Text>Compte</Text>
      </View>



       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>


      <View style={{margin: 40}}>
      <Text>Etayer</Text>
      </View>



       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>


      <View style={{margin: 40}}>
      <Text>A propos</Text>
      </View>


       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>


      <View style={{margin: 40}}>
      <Text>Deconnexions</Text>
      </View>



       <View style = {{width:"100%", justifyContent: 'flex-start' , flexDirection: 'row', alignItems:'center', backgroundColor:'white',elevation: 2,}}>
        <View style = {{ margin:10,marginRight:30,paddingVertical:10, justifyContent: 'space-between' , flexDirection: 'row', alignItems:'center', marginVertical:30}}>
        <View style = {{marginLeft:10}}>
        <Icons  name="calendar-sync-outline" size={30} color={'black'} />
        </View>
        <View style = {{marginLeft:10}}>
        <Text>Synchroniser avec mon calendrier</Text>
        <Text>Synchroniser automatiquement toutes les dates limites et d{"'"}autres elements connexes avec votre calendrier</Text>
        </View>
        </View>

        <SwitchButton/>
        </View>


      <View style={{margin: 40}}>
      <Text>Version 4.6.1</Text>
      </View>


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

export default Parametres;