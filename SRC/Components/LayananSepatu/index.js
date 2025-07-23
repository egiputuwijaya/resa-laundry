import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Counter from '../Counter';
import Sepatuhitam from '../Sepatuhitam';
import Sepatuputih from '../Sepatuputih';
import DatalistSepatu from '../DatalistKarpet';
import TombolBuatPesanan from '../TombolBuatPesanan';

const PilihanSepatu = () => {
  const [Sepatu, SetSepatu] = useState(true);

  const handlePress = () => {
    SetSepatu(!Sepatu);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {Sepatu ? <Sepatuhitam /> : <Sepatuputih />}
      </TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.Label}>Jumlah Sepatu Anda</Text>
      </View>
    </View>
  );
};
const LayananSepatu = () => {
  return (
    <View style={styles.Page}>
      <View>
        <PilihanSepatu />
        <Counter />
      </View>
      <TombolBuatPesanan />
    </View>
  );
};

export default LayananSepatu;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: '#5AB2FF',
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
    margin: 20,
  },
  ButtonText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
