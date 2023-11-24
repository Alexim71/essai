import React from 'react';
import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { COLORS, LISTS }  from '../Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwitchAgenda from '../components/SwitchAgenda';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const Schedule = ({navigation}) => {
    const [items, setItems] = React.useState({});

    const loadItems = (day) => {

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(10, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }

    const renderItem = (item) => {
        return (
            <Pressable style={styles.item}>


                        <View>
                            <Text>{item.name}</Text>
                        </View>


            </Pressable>
        );
    }

    return (
<>
   <View>
    <View style={styles.header}>
          <StatusBar translucent={false} backgroundColor={COLORS.blueSoft} />

        <Icon name="sort" size={28} color={COLORS.white}  onPress={() => navigation.openDrawer()} />
        <Icon name="account-circle" size={40} color={COLORS.blue} />
    </View>
    <View style = {{padding:30, backgroundColor: 'white', flexDirection: 'row',justifyContent: 'space-between',}} >
    <Text> Agenda</Text>
    <SwitchAgenda/>
    </View>
   </View>
        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-07-07'}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
                renderItem={renderItem}
            />
            <StatusBar />
        </View>
  </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.blueSoft,
  },
});

export default Schedule;