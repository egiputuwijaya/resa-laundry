import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SepatuHitamHome} from '../../Assets';

const Sepatuhitam = () => {
  return (
    <View>
      <SepatuHitamHome />
      <View style={styles.Container}>
        <Text style={styles.Label}>Sepatu Hitam</Text>
      </View>
    </View>
  );
};

export default Sepatuhitam;

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
