import React from 'react';
import {TextInput, StyleSheet, SafeAreaView } from 'react-native';



 const CustomInput = ({label, value, setValue, placeholder, secureTextEntry, autoCapitalize,  keyboardType}) => {
  
  return (
    <SafeAreaView style={styles.container}>

    
      <TextInput
      label={label}
      variant="outlined"
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
       style={styles.input}
       secureTextEntry={secureTextEntry} 
       keyboardType={keyboardType}
       autoFocus = {true}
       clearButtonMode={'always'} 
       selectTextOnFocus={true} 
       selectionColor={"blue"}
       showSoftInputOnFocus={true}
       />
       
     </SafeAreaView>
  );
}
 const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        marginVertical: 10,
        borderRadius:10,
        margin:30,
        padding: 13,
        backgroundColor: '#F5FCFF',
    }, 
    input: {
      fontSize:16,
    },
});

export default CustomInput;