import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PesananAktif, RiwayatPesanan} from '../../Components';

const Pesanan = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <View style={styles.PesananAktif}>
            <Text style={styles.LayananLabel}>Pesanan Aktif</Text>
            <PesananAktif Title="Pesanan No. 17898409" Status="Selesai" />
            <PesananAktif Title="Pesanan No. 17898490" Status="Penjemuran" />
            <PesananAktif Title="Pesanan No. 17898412" Status="Pengeringan" />
            <PesananAktif Title="Pesanan No. 17898434" Status="Pencucian" />
          </View>
        </View>

        <View style={styles.Riwayat}>
          <Text style={styles.LayananLabel}>Riwayat Pesanan</Text>
          <RiwayatPesanan Title="Pesanan No. 17898409" Status="Selesai" />
          <RiwayatPesanan Title="Pesanan No. 17898409" Status="Selesai" />
          <RiwayatPesanan Title="Pesanan No. 17898409" Status="Selesai" />
          <RiwayatPesanan Title="Pesanan No. 17898409" Status="Selesai" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  PesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#5AB2FF',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  LayananLabel: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
    marginTop: 10
  },
  Page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Riwayat: {
    marginTop: 20,
    paddingHorizontal: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#DDDDDD'
  },
});
