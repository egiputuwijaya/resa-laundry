import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Datalist from '../Datalist';
import {SatuanHome} from '../../Assets';
import Counter from '../Counter';
import TombolBuatPesanan from '../TombolBuatPesanan';

const LayananSatuan = () => {
  return (
    <View style={styles.Container}>
      <SatuanHome />
      <Datalist />
      <View style={styles.LabelContainer}>
        <Text style={styles.Label}>Jumlah Pakaian Anda</Text>
      </View>
      <Counter />
      <TombolBuatPesanan />
    </View>
  );
};

export default LayananSatuan;

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
