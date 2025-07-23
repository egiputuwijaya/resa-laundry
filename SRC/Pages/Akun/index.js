import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data, Profile, Voucher} from '../../Components';

const Akun = () => {
  return (
    <View>
      <ScrollView>
        <Profile />
        <Data />
        <View style={styles.Container}>
          <Text style={styles.Text}>Voucher Yang Kamu Miliki</Text>
        </View>
        <Voucher Title="Gratis Ongkir" />
        <Voucher Title="Diskon 20%" />
        <Voucher Title="Diskon 10%" />
        <Voucher Title="Gratis Ongkir" />
        <Voucher Title="Diskon 80%" />
      </ScrollView>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    marginTop: 10,
    padding: 20,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
  },
});
