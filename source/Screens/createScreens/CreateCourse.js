import React, { useState } from 'react';
import {ScrollView, StyleSheet, TextInput, View, Text, StatusBar } from 'react-native';
 import { Dropdown } from 'react-native-element-dropdown';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import {COLORS} from '../../Constants';

const CreateCourse = ({navigation}) => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
     const [value, setValue] = useState(null);

      const renderItem = item => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            {item.value === value && (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
          </View>
        );
      };

  return (
  <>
      <View style={styles.header}>
              <StatusBar translucent={false} backgroundColor={COLORS.blueSoft} />

            <Icon name="sort" size={28} color={COLORS.white}  onPress={() => navigation.openDrawer()} />
            <Icon name="account-circle" size={40} color={COLORS.blue} />
        </View>
    <ScrollView>
    <View style = {styles.title}>
       <Text style = {styles.titleHeader}> Creation de cours</Text>
    </View>
    <View style={styles.download}>

      <View style={[styles.input, {width: '30%'}]}>
          <Icon name="cloud-download" size={60} color={COLORS.blue} />
      </View>
    <View >
       <Text style = {[styles.titleHeader, {padding:10, fontSize: 20, alignItems:'center'}]}>Telecharger une miniature</Text>
    </View>
    </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Titre du cours"
        keyboardType="default"
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Categories"
        searchPlaceholder="recherche..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
      <TextInput
        style={[styles.input, {padding: 60}]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Description de cours"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="default"
      />



    </ScrollView>
  </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.blueSoft,
  },
  title: {
    paddingHorizontal: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titleHeader: {
    padding: 40,
    fontSize: 30,
    color: 'grey',
  },
  download: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    margin: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'blue',
    padding: 25,
  },
    dropdown: {
      margin: 30,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'blue',
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});

export default CreateCourse;



