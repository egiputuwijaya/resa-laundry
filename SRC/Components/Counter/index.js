import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.ParentTombol}>
      <TouchableOpacity
        style={styles.Tombol}
        onPress={() => setNumber(number - 1)}>
        <Text style={styles.TextButton}>Kurang</Text>
      </TouchableOpacity>
      <Text style={styles.NumberCore}>{number}</Text>
      <TouchableOpacity
        style={styles.Tombol}
        onPress={() => setNumber(number + 1)}>
        <Text style={styles.TextButton}>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Tombol: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
    backgroundColor: '#005C78',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ParentTombol: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextButton: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
    color: 'white',
  },
  NumberCore: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 80,
    paddingHorizontal: 30,
  },
});
