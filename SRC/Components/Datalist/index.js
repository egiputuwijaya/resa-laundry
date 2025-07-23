import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Datalist = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {
      label: 'Jas',
      value: 'Jas',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Kemeja',
      value: 'Kemeja',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Kaos',
      value: 'Kaos',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Gaun',
      value: 'Gaun',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Gamis',
      value: 'Gamis',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Chino',
      value: 'Chino',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Dasar',
      value: 'Dasar',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
    },
    {
      label: 'Rok',
      value: 'Rok',
      icon: () => <Icon name="user-tie" size={20} color="000000" />,
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
        placeholder="Pilih Minimal 1 Jenis Pakaian"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        min={1}
        max={5}
      />
    </View>
  );
};

export default Datalist;

const styles = StyleSheet.create({
  Piker: {
    paddingHorizontal: 30,
  },
});
