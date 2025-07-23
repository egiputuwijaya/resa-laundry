import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SetrikaUapHome} from '../../Assets';

const SetrikaUap = () => {
  return (
    <View>
      <SetrikaUapHome />
      <View style={styles.Container}>
        <Text style={styles.Label}>Setrika Uap</Text>
      </View>
    </View>
  );
};

export default SetrikaUap;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 30,
  },
});
