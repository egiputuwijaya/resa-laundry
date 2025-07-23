import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {
  Coint,
  Kertas,
  Ekspres,
  Karpet,
  Kiloan,
  Satuan,
  Sepatu,
  Setrika,
} from '../../Assets';
import {useNavigation} from '@react-navigation/native';

const ButtonIcon = ({title, type}) => {
  const IconSaldo = () => {
    if (title === 'Add Saldo') return <Kertas />;
    if (title === 'Game Point') return <Coint />;
    if (title === 'Kiloan') return <Kiloan />;
    if (title === 'Satuan') return <Satuan />;
    if (title === 'Setrika') return <Setrika />;
    if (title === 'Karpet') return <Karpet />;
    if (title === 'Sepatu') return <Sepatu />;
    if (title === 'Ekspres') return <Ekspres />;

    return <Kertas />;
  };

  const navigation = useNavigation();

  const HandlePress = () => {
    switch (title) {
      case 'Add Saldo':
        navigation.navigate('Add Saldo');
        break;
      case 'Game Point':
        navigation.navigate('Game Point');
        break;
      case 'Kiloan':
        navigation.navigate('Kiloan');
        break;
      case 'Satuan':
        navigation.navigate('Satuan');
        break;
      case 'Setrika':
        navigation.navigate('Setrika');
        break;
      case 'Karpet':
        navigation.navigate('Karpet');
        break;
      case 'Sepatu':
        navigation.navigate('Sepatu');
        break;
      case 'Ekspres':
        navigation.navigate('Ekspres');
        break;
      default:
        console.warn('Screen not found for title:', title);
    }
  };

  return (
    <TouchableOpacity style={styles.Container(type)} onPress={HandlePress}>
      <View>
        <IconSaldo style={styles.IconSaldo(type)} />
      </View>
      <Text style={styles.Text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  Container: type => ({
    marginBottom: 12,
    marginRight: type === 'Layanan' ? 30 : 0,
  }),
  IconSaldo: type => ({
    backgroundColor: '#5AB2FF',
    padding: type === 'Layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  Text: type => ({
    fontSize: type === 'Layanan' ? 14 : 10,
    fontFamily:
      type === 'Layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
