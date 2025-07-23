import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {KiloanHome} from '../../Assets';
import Counter from '../Counter';
import TombolBuatPesanan from '../TombolBuatPesanan';

const LayananKiloan = () => {
  return (
    <View style={styles.Container}>
      <KiloanHome style={styles.KiloanHome} />
      <View style={styles.Base}>
        <Text style={styles.Label}>Jumlah Pakaian Anda Dalam Kilogram</Text>
        <Counter />
      </View>
      <TombolBuatPesanan />
    </View>
  );
};

export default LayananKiloan;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#5AB2FF',
  },
  Base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
  },
  ButtonText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
