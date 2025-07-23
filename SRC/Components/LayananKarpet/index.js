import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KarpetHome} from '../../Assets';
import DatalistKarpet from '../DatalistKarpet';
import Counter from '../Counter';
import TombolBuatPesanan from '../TombolBuatPesanan';

const LayananKarpet = () => {
  return (
    <View style={styles.Container}>
      <KarpetHome />
      <DatalistKarpet />
      <View style={styles.LabelContainer}>
        <Text style={styles.Label}>Jumlah Karpet Anda</Text>
      </View>
      <Counter />
      <TombolBuatPesanan />
    </View>
  );
};

export default LayananKarpet;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#5AB2FF',
  },
  Label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
  },
  LabelContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
