import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Akun, Pesanan, Splash} from '../Pages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HomeKiloan,
  HomeSatuan,
  HomeSetrika,
  HomeKarpet,
  HomeSepatu,
  HomeEkspres,
  AddSaldo,
  GamePoint,
  Selesai,
  Penjemuran,
  Pengeringan,
  Pencucian,
  RiwayatPesananSelesai,
  UbahData,
} from '../Components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Pesanan') {
            iconName = 'cart';
          } else {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false, tabBarBadge: 99}}
      />
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Kiloan" component={HomeKiloan} />
      <Stack.Screen name="Satuan" component={HomeSatuan} />
      <Stack.Screen name="Setrika" component={HomeSetrika} />
      <Stack.Screen name="Karpet" component={HomeKarpet} />
      <Stack.Screen name="Sepatu" component={HomeSepatu} />
      <Stack.Screen name="Ekspres" component={HomeEkspres} />
      <Stack.Screen name="Add Saldo" component={AddSaldo} />
      <Stack.Screen name="Game Point" component={GamePoint} />
      <Stack.Screen name="Selesai" component={Selesai} />
      <Stack.Screen name="Penjemuran" component={Penjemuran} />
      <Stack.Screen name="Pengeringan" component={Pengeringan} />
      <Stack.Screen name="Pencucian" component={Pencucian} />
      <Stack.Screen
        name="Riwayat Pesanan Selesai"
        component={RiwayatPesananSelesai}
      />
      <Stack.Screen name="Ubah Data" component={UbahData} />
    </Stack.Navigator>
  );
};

export default Routers;

const styles = StyleSheet.create({});
