import {
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header, SplashIcon} from '../../Assets';
import {ButtonIcon, PesananAktif, Saldo} from '../../Components';

const Home = () => {
  return (
    <View style={styles.Page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={Header} style={styles.Header}>
          <Image source={SplashIcon} style={styles.Icon} />
          <View style={styles.Hello}>
            <Text style={styles.Selamat}>Selamat Datang</Text>
            <Text style={styles.Username}>Egi Putu Wijaya</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.Layanan}>
          <Text style={styles.LayananLabel}>Layanan Kami</Text>
          <View style={styles.IconLayanan}>
            <ButtonIcon title="Kiloan" type="Layanan" />
            <ButtonIcon title="Satuan" type="Layanan" />
            <ButtonIcon title="Setrika" type="Layanan" />
            <ButtonIcon title="Karpet" type="Layanan" />
            <ButtonIcon title="Sepatu" type="Layanan" />
            <ButtonIcon title="Ekspres" type="Layanan" />
          </View>
        </View>
        <View style={styles.PesananAktif}>
          <Text style={styles.LayananLabel}>Pesanan Aktif</Text>
          <PesananAktif Title="Pesanan No. 17898409" Status="Selesai" />
          <PesananAktif Title="Pesanan No. 17898490" Status="Penjemuran" />
          <PesananAktif Title="Pesanan No. 17898412" Status="Pengeringan" />
          <PesananAktif Title="Pesanan No. 17898434" Status="Pencucian" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Header: {
    width: windowWidth,
    height: windowHeight * 0.42,
  },
  Icon: {
    width: windowWidth * 0.33,
    height: windowHeight * 0.09,
    marginVertical: 10,
    marginHorizontal: 1,
  },
  Hello: {
    marginTop: windowHeight * 0.02,
    marginHorizontal: 10,
  },
  Selamat: {
    fontSize: 35,
    fontFamily: 'TitilliumWeb-Regular',
  },
  Username: {
    fontSize: 30,
    fontFamily: 'TitilliumWeb-Bold',
  },
  Layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  LayananLabel: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  IconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  PesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#DDDDDD',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
