import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Counter from '../Counter';
import SetrikaBiasa from '../SetrikaBiasa';
import SetrikaUap from '../Setrikauap';
import TombolBuatPesanan from '../TombolBuatPesanan';

const PilihanSetrika = () => {
  const [Setrika, SetSetrika] = useState(true);

  const handlePress = () => {
    SetSetrika(!Setrika);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {Setrika ? <SetrikaBiasa /> : <SetrikaUap />}
      </TouchableOpacity>
      <View style={styles.Container}>
        <Text style={styles.Label}>Jumlah Pakaian Anda Dalam Kilogram</Text>
      </View>
    </View>
  );
};
const LayananSetrika = () => {
  return (
    <View style={styles.Page}>
      <View>
        <PilihanSetrika />
        <Counter />
      </View>

      <TombolBuatPesanan />
    </View>
  );
};

export default LayananSetrika;

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
