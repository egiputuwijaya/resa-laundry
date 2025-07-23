import {StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import React from 'react';
import ButtonIcon from '../Button';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.InfoSaldo}>
        <View style={styles.Text}>
          <Text style={styles.LabelSaldo}>Saldo:</Text>
          <Text style={styles.ValueSaldo}>Rp 100.000</Text>
        </View>
        <View style={styles.Text}>
          <Text style={styles.LabelPoint}>Resa Point:</Text>
          <Text style={styles.ValuePoint}>100 Point</Text>
        </View>
      </View>

      <View style={styles.Button}>
        <ButtonIcon title="Add Saldo" />
        <ButtonIcon title="Game Point" style={styles.GamePoint} />
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    opacity: 0.9,
    padding: 10,
    margin: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    marginTop: -windowHeight * 0.12,
    flexDirection: 'row',
  },
  Text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InfoSaldo: {
    width: '60%',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
  LabelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  ValueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  LabelPoint: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Regular',
  },
  ValuePoint: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#5AB2FF',
  },
  GamePoint: {
    marginRight: 70,
  },
});
