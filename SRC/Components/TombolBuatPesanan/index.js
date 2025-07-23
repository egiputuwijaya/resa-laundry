import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const TombolBuatPesanan = () => {
  return (
    <View style={styles.Tombol}>
      <TouchableOpacity style={styles.BuatPesanan}>
        <Text style={styles.Text}>Buat Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TombolBuatPesanan;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BuatPesanan: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    backgroundColor: '#FF7D29',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tombol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
