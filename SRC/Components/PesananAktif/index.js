import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Pesanan} from '../../Assets';
import {useNavigation} from '@react-navigation/native';

const PesananAktif = ({Title, Status}) => {
  const navigation = useNavigation();

  const HandlePress = () => {
    switch (Status) {
      case 'Selesai':
        navigation.navigate('Selesai');
        break;
      case 'Penjemuran':
        navigation.navigate('Penjemuran');
        break;
      case 'Pengeringan':
        navigation.navigate('Pengeringan');
        break;
      case 'Pencucian':
        navigation.navigate('Pencucian');
        break;

      default:
        console.warn('Screen not found for title:', Status);
    }
  };
  return (
    <TouchableOpacity style={styles.Container} onPress={HandlePress}>
      <Pesanan />
      <View style={styles.Text}>
        <Text style={styles.Title}>{Title}</Text>
        <Text style={styles.Status}>{Status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    opacity: 0.9,
    padding: 10,
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  Text: {
    marginLeft: windowWidth * 0.05,
  },
  Title: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  Status: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#5AB2FF',
  },
});
