import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SetrikaHome} from '../../Assets';

const SetrikaBiasa = () => {
  return (
    <View>
      <SetrikaHome />
      <View style={styles.Container}>
        <Text style={styles.Label}>Setrika Biasa</Text>
      </View>
    </View>
  );
};

export default SetrikaBiasa;

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
