import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ProfileIcon} from '../../Assets';
import Data from '../Data';

const Profile = () => {
  return (
    <View style={styles.Container}>
      <View>
        <ProfileIcon />
      </View>
      <View style={styles.Text}>
        <Text style={styles.LabelNama}>Egi Putu Wijaya</Text>
        <Text style={styles.LabelPoint}>100 Point</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 50,
    alignItems: 'center',
    backgroundColor : '#5AB2FF',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
   
  },
  Text: {
    marginLeft: 25,
    
  },LabelNama: {
    fontSize: 30,
    fontFamily: 'TitilliumWeb-Regular',
  }, LabelPoint: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  }
});
