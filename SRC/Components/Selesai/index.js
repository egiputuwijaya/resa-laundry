import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProsesSelesai} from '../../Assets';

import {useNavigation} from '@react-navigation/native';


const PesananSelesai = () => {
  const navigasi = useNavigation();
  return (
    <View style={styles.Page}>
      <ProsesSelesai />
      <View style={styles.Container}>
        <Text style={styles.text}>Proses Anda Telah Selesai</Text>
        <Text style={styles.textChild}>Silahkan Kembali Kehalaman Awal</Text>
        <Text style={styles.textGrand}>Selesai Pada 17 April Yang Lalu</Text>
      </View>

      <View style={styles.buttonPage}>
        <TouchableOpacity
          style={styles.buttonContainer} onPress={() => navigasi.navigate('MainApp')}>
          <Text>Kembali Ke Layar Utama</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PesananSelesai;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: '#5AB2FF',
    flex: 1,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 22,
    color: '#5AB2FF',
  },
  textChild: {
    fontSize: 15,
  },
  textGrand: {
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: '#FF7D29',
    padding: 20,
    borderRadius: 20,
    marginTop: 50,
  },
  buttonPage: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '',
  },
});
