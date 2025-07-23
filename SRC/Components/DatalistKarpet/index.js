import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DatalistKarpet = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {
      label: 'Karpet Polypropylene',
      value: 'Karpet Polypropylene',
    },
    {
      label: 'Karpet Nilon',
      value: 'Karpet Nilon',
    },
    {
      label: 'Karpet Katun',
      value: 'Karpet Katun',
    },
    {
      label: 'Karpet Wol',
      value: 'Karpet Wol',
    },
    {
      label: 'Karpet Vinyl',
      value: 'Karpet Vinyl',
    },
  ]);
  return (
    <View style={styles.Piker}>
      <DropDownPicker
        textStyle={{
          fontSize: 15,
          fontFamily: 'TitilliumWeb-Bold',
          color: '#5AB2FF',
        }}
        placeholder="Pilih Jenis Karpet"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

export default DatalistKarpet;

const styles = StyleSheet.create({
  Piker: {
    paddingHorizontal: 30,
  },
});
