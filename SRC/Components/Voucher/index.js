import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {VoucherIcon} from '../../Assets';

const Voucher = ({Title}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.Main}>
          <View style={styles.Container}>
            <VoucherIcon />
            <Text style={styles.Voucher}>{Title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  Main: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  Container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#5AB2FF',
    borderRadius: 20,
  },
  Voucher: {
    padding: 15,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
  },
});
