// PERCOBAAN 1

// import React, {useState} from 'react';
// import {
//   Alert,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import InputData from '../InputData';
// import FIREBASE from '../../config/FireBase';
// import {useNavigation} from '@react-navigation/native';

// const UbahData = () => {
//   const navigasi = useNavigation();
//   const [nama, setNama] = useState('');
//   const [nomorHP, setNomorHP] = useState('');
//   const [email, setEmail] = useState('');
//   const [alamat, setAlamat] = useState('');

//   const onChangeText = (namaState, value) => {
//     if (namaState === 'nama') setNama(nama);
//     else if (namaState === 'nomorHP') setNomorHP(value);
//     else if (namaState === 'email') setEmail(value);
//     else if (namaState === 'alamat') setAlamat(value);
//   };

//   const onSubmit = () => {
//     console.log('Nama:', nama);
//     console.log('Nomor HP:', nomorHP);
//     console.log('Email:', email);
//     console.log('Alamat:', alamat);
//     if (nama && nomorHP && email && alamat) {
//       const dataDiri = FIREBASE.database().ref('KontakAkun');
//       const KontakAkun = {
//         nama: nama,
//         nomorHP: nomorHP,
//         email: email,
//         alamat: alamat,
//       };
//       dataDiri
//         .push(KontakAkun)
//         .then(data => {
//           Alert.alert('Success', 'Data Anda Berhasil Di Simpan');
//           navigasi.replace('MainApp');
//         })
//         .catch(error => {
//           console.log('Error', error);
//         });
//     } else {
//       Alert.alert('Error', 'Silahkan Masukan Data Yang Valid');
//     }
//   };

//   return (
//     <View style={styles.Page}>
//       <ScrollView>
//         <View style={styles.Container}>
//           <Text style={styles.Text}>DataIsi</Text>
//         </View>
//         <InputData
//           label="Nama:"
//           placeholder="Masukan Nama Anda"
//           onChangeText={value => onChangeText('nama', value)}
//           value={nama}
//           namaState="nama"
//         />
//         <InputData
//           label="No. Telp"
//           placeholder="Masukan Nomor HP Anda"
//           keyboardType="number-pad"
//           onChangeText={value => onChangeText('nomorHP', value)}
//           value={nomorHP}
//           namaState="Nomor HP"
//         />
//         <InputData
//           label="Email:"
//           placeholder="Masukan Alamat Email"
//           onChangeText={value => onChangeText('email', value)}
//           value={email}
//           namaState="Email"
//         />
//         <InputData
//           label="Alamat:"
//           placeholder="Masukan Alamat Anda"
//           isTextArea
//           onChangeText={value => onChangeText('alamat', value)}
//           value={alamat}
//           namaState="Alamat"
//         />
//         <TouchableOpacity
//           style={styles.ContainerSubmit}
//           onPress={() => onSubmit()}>
//           <Text style={styles.TextSubmit}>KIRIM</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Page: {
//     backgroundColor: '#5AB2FF',
//     flex: 1,
//   },
//   Container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Text: {
//     fontFamily: 'TitilliumWeb-Bold',
//     fontSize: 25,
//     marginVertical: 10,
//     color: 'white',
//   },
//   ContainerSubmit: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   TextSubmit: {
//     fontSize: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 155,
//     backgroundColor: '#FF7D29',
//     borderRadius: 5,
//   },
// });

// export default UbahData;

// PERCOBAAN 3
import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputData from '../InputData';
import {database} from '../../config/FireBase';
import {ref, push} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';

const UbahData = () => {
  const navigasi = useNavigation();
  const [nama, setNama] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  const onChangeText = (namaState, value) => {
    if (namaState === 'nama') setNama(value);
    else if (namaState === 'nomorHP') setNomorHP(value);
    else if (namaState === 'email') setEmail(value);
    else if (namaState === 'alamat') setAlamat(value);
  };

  const onSubmit = () => {
    console.log('Nama:', nama);
    console.log('Nomor HP:', nomorHP);
    console.log('Email:', email);
    console.log('Alamat:', alamat);
    if (nama && nomorHP && email && alamat) {
      const dataDiri = ref(database, 'KontakAkun');
      const KontakAkun = {nama, nomorHP, email, alamat};
      push(dataDiri, KontakAkun)
        .then(() => {
          Alert.alert('Success', 'Data Anda Berhasil Di Simpan');
          navigasi.replace('MainApp');
        })
        .catch(error => {
          console.log('Error', error);
        });
    } else {
      Alert.alert('Error', 'Silahkan Masukan Data Yang Valid');
    }
  };

  return (
    <View style={styles.Page}>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.Text}>DataIsi</Text>
        </View>
        <InputData
          label="Nama:"
          placeholder="Masukan Nama Anda"
          onChangeText={value => onChangeText('nama', value)}
          value={nama}
          namaState="nama"
        />
        <InputData
          label="No. Telp"
          placeholder="Masukan Nomor HP Anda"
          keyboardType="number-pad"
          onChangeText={value => onChangeText('nomorHP', value)}
          value={nomorHP}
          namaState="nomorHP"
        />
        <InputData
          label="Email:"
          placeholder="Masukan Alamat Email"
          onChangeText={value => onChangeText('email', value)}
          value={email}
          namaState="email"
        />
        <InputData
          label="Alamat:"
          placeholder="Masukan Alamat Anda"
          isTextArea
          onChangeText={value => onChangeText('alamat', value)}
          value={alamat}
          namaState="alamat"
        />
        <TouchableOpacity style={styles.ContainerSubmit} onPress={onSubmit}>
          <Text style={styles.TextSubmit}>KIRIM</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UbahData;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: '#5AB2FF',
    flex: 1,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 25,
    marginVertical: 10,
    color: 'white',
  },
  ContainerSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextSubmit: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 155,
    backgroundColor: '#FF7D29',
    borderRadius: 5,
  },
});
