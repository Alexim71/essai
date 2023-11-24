

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

import Jitsi from '../../source/services/PresentationCourses/Jitsi';
const ProfileScreen = () => {
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
                            };

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
