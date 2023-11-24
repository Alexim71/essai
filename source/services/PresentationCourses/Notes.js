

import React, {useState} from 'react';
import {FlatList, SafeAreaView,StatusBar,StyleSheet,Text,Pressable,View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

 {
  id: String;
  title: String;
};

const DATA = [
  {
    id: '1',
    title: 'Quiz noté',
    grade: '10%',
  },
  {
    id: '2',
    title: 'Quiz noté',
    grade: '10%',
  },
  {
    id: '3',
    title: 'Quiz noté',
    grade: '10%',
  },
  {
    id: '4',
    title: 'Quiz noté',
    grade: '10%',
  },
];



const Item = ({item, onPress, backgroundColor, textColor}) => (
  <Pressable onPress={onPress} style={[styles.item, {backgroundColor}]}>

    <View style={{justifyContent:'flex-start', flexDirection:'row' }}>
     <Icon name="lock-outline" size={20} color={'gray'} style={{marginRight:10}} />
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
     </View>

    <View style={{justifyContent:'space-between', flexDirection:'row' }}>
       <Text style={{color:'gray'}}>Quiz</Text>
       <Text style={[styles.title, {color: 'gray', fontSize:12}]}>Podération: {item.grade}</Text>
    </View>

    <View style ={{ backgroundColor:'gray', padding:0.2, marginTop:12}}>
    </View>
     <Text style={{fontSize:10, color:'gray'}}> Payez le cours pour déverrouiller cet élément.</Text>
  </Pressable>
);

const Notes = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#f0f0f5' : '#fff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={{justifyContent:'flex-start', flexDirection:'row', margin:20, backgroundColor:'#f0f0f5'}}>
       <Icon name="check-circle" size={25} color={'gray'} />
       <Text style={{fontSize:13, color:'gray'}}> Terminez le cours en réussissant tous le devoirs.</Text>
    </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation:2,
  },
  title: {
    fontSize: 15,
  },
});

export default Notes;
