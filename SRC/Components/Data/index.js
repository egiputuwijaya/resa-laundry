import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Data = () => {
  const navigasi = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigasi.navigate('Ubah Data')}>
        <View style={styles.TextContainer}>
          <Text style={styles.TextWarna}>Data Diri Anda</Text>
        </View>
        <Text style={styles.Text}>Nomor Telepon: 082290897861</Text>
        <Text style={styles.Text}>
          Alamat : Jl. Beringin 3, Jakarta Selatan
        </Text>
        <Text style={styles.Text}>Email : egiwijaya@mail.com</Text>
        <Text style={styles.Text}>Total Pesanan : 160</Text>
        <Text style={styles.Text}>Total Pesanan Terselesaikan : 157</Text>
        <View style={styles.TextContainer}>
          <Text style={styles.TextChild}>Klik Untuk Merubah Data Diri</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  Text: {
    paddingBottom: 5,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
  },
  TextWarna: {
    paddingBottom: 5,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
    color: '#5AB2FF',
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextChild: {
    marginVertical: 8,
    fontSize: 12,
  },
});
