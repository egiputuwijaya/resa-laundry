import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MenuPoint, VoucherIcon} from '../../Assets';
import VoucherPoint from '../VoucherPoint';

const GamePoint = () => {
  return (
    <View style={styles.Page}>
      <ScrollView>
        <View>
          <MenuPoint />
          <View style={styles.LabelContainer}>
            <Text style={styles.Label}>Jumlah Point Yang Anda Miliki</Text>
            <Text style={styles.Uang}>100 Point</Text>
          </View>
          <View style={styles.PageParent}>
            <View style={styles.PagePembayaran}>
              <Text style={styles.PilihanPembayaran}>Tukar Point</Text>

              <View style={styles.ChildPointContainer}>
                <View style={styles.PointContainer}>
                  <Text style={styles.PointTransfer}>300 Point</Text>
                </View>
                <VoucherPoint Title="Diskon 10%" />
                <VoucherPoint Title="Diskon 15%" />
                <VoucherPoint Title="Diskon 5%" />
                <View style={styles.PointContainer}>
                  <Text style={styles.PointTransfer}>500 Point</Text>
                </View>
                <VoucherPoint Title="Gratis Ongkir" />
                <VoucherPoint Title="Cash Back 20%" />
                <VoucherPoint Title="Diskon 5%" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GamePoint;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: '#5AB2FF',
    flex: 1,
  },
  PageParent: {
    marginVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  Label: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
  },
  LabelContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  Uang: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 30,
  },
  PilihanPembayaran: {
    padding: 20,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 22,
  },
  PagePembayaran: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  PointContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PointTransfer: {
    backgroundColor: '#5AB2FF',
    padding: 10,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    borderRadius: 20,
    marginVertical: 20,
  },
});
