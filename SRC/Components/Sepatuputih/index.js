import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SepatuPutihHome} from '../../Assets';

const Sepatuputih = () => {
  return (
    <View>
      <SepatuPutihHome />
      <View style={styles.Container}>
        <Text style={styles.Label}>Sepatu Putih</Text>
      </View>
    </View>
  );
};

export default Sepatuputih;

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
