
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* ****************************************
           ___ COMPONENTS INPUT_____
   **************************************** */


const Input = ({ autoComplete, iconName,  error, password,onFocus = () => {}, ...props}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style = {styles.container} >
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.blue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
            cursorColor={COLORS.blueSoft}
           clearTextOnFocus={true}
          autoComplete={autoComplete}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.blue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        marginVertical: 3,
        margin:10,
        padding: 13,
    },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    borderRadius:20,
    paddingHorizontal: 15,
    borderWidth: 0.9,
  },
});

export default Input;
