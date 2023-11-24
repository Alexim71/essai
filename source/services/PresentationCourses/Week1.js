import React, {useState} from 'react';

import { View, Text, StyleSheet, SectionList, Alert,Pressable } from 'react-native';
import {COLORS} from '../../Constants';

//import Jitsi from '../PresentationCourses/Jitsi';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Separator = () => <View style={menuStyles.separator} />;

const menuItemsToDisplay = [
  {
    title: 'Introduction',
    data: [
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
    ],
  },
  {
    title: 'Ensemble',
    data: [
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
    ],
  },
  {
    title: 'Fonctions',
    data: [
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
    ],
  },
  {
    title: 'Introduction',
    data: [
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
      { name: 'Titre', dates: '22/04/2023  10: 30 AM -  11: 00 AM' },
    ],
  },
];

const Item = ({ name,dates }) => (
  <View style={menuStyles.innerContainer} onPress={() => alert('Joindre une reunion!')}>
   <View style={{justifyContent:'flex-start', flexDirection:'row'}} >
       <Icon name="check-circle" size={30} color={COLORS.blue} />
    <Text style={[menuStyles.itemText, {color: 'black'}]}>{name}</Text>
    </View>
    <Text style={menuStyles.itemText}>{dates}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} dates={item.dates} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

const [jointMeeting, setJoinMeeting] = useState(false);
  return (

    <View style={menuStyles.container}>

     <View style={{paddingVertical:15, marginBottom: 30}}>
     {jointMeeting ? (
      <Text>Il faut implementer JitSi ici....</Text>
              ) : (
             <Pressable
             onPress={() => setJoinMeeting(true)}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}></SectionList>
        </Pressable>
        )}
        </View>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'#FBFBFB',
  },
  itemText: {
    color: '#909090',
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 4,
    paddingVertical: 15,
    marginTop:30,
  },
  sectionHeader: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default MenuItems;