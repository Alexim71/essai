import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AlarmTimeMode = ({day}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}

      >
      <Pressable onPress={showDatePicker}>
        <View  style = {{ padding: 10}}>
        <Text style = {{ fontSize: 18,}}> {day}</Text>
        <Text style={{ fontSize: 18, marginBottom: 20, padding:10 }} >
          {selectedDate ? selectedDate.toLocaleTimeString() : ' Choisissez une heure'}
        </Text>
        </View>
        </Pressable>

        <DateTimePickerModal
          neutralButton={{label: 'Clear', textColor: 'grey'}}
          display="spinner"
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

      </View>
    </SafeAreaView>
  );
};

export default AlarmTimeMode;