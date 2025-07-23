import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {VoucherIcon} from '../../Assets';

const VoucherPoint = ({Title}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.Point}>
          <VoucherIcon />
          <Text style={styles.PointText}>{Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VoucherPoint;

const styles = StyleSheet.create({
  Point: {
    backgroundColor: '#FF7D29',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  PointText: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    marginHorizontal: 70,
  },
});
