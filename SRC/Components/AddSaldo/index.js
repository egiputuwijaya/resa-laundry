import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BankBca,
  BankBri,
  BankMega,
  Gopay,
  MenuAddSaldo,
  Shopee,
  Dana,
  Alfamart,
  Alfamidi,
  Lawson,
} from '../../Assets';

const AddSaldo = () => {
  return (
    <View style={styles.Page}>
      <ScrollView>
        <View>
          <MenuAddSaldo />
          <View style={styles.LabelContainer}>
            <Text style={styles.Label}>Jumlah Saldo Yang Anda Miliki</Text>
            <Text style={styles.Uang}>Rp 100.000</Text>
          </View>
          <View style={styles.PageParent}>
            <View style={styles.PagePembayaran}>
              <Text style={styles.PilihanPembayaran}>
                Pilihan Top Up dan Pembayaran
              </Text>

              <View>
                <Text style={styles.TransferBank}>Transfer Bank</Text>
                <View style={styles.Bank}>
                  <TouchableOpacity>
                    <BankBca />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <BankBri />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <BankMega />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.TransferBank}>E-Wallet</Text>
                <View style={styles.Bank}>
                  <TouchableOpacity>
                    <Gopay />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Shopee />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Dana />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.TransferBank}>Minimarket</Text>
                <View style={styles.Bank}>
                  <TouchableOpacity>
                    <Alfamart />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Alfamidi />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Lawson />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddSaldo;

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
    justifyContent: 'center',
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
  },
  TransferBank: {
    marginHorizontal: 20,
  },
  Bank: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
