import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {EkspresHome} from '../../Assets';
import Counter from '../Counter';
import TombolBuatPesanan from '../TombolBuatPesanan';

const LayananEkspres = () => {
  return (
    <View style={styles.Page}>
      <EkspresHome />

      <View style={styles.Container}>
        <Text style={styles.Label}>Jumlah Pakaian Anda Dalam Kilogram</Text>
      </View>
      <Counter />
      <TombolBuatPesanan/>
    </View>
  );
};

export default LayananEkspres;



const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: '#5AB2FF',
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
