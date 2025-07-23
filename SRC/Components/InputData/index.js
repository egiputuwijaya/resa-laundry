// import {StyleSheet, Text, TextInput, View} from 'react-native';
// import React from 'react';

// const InputData = ({
//   label,
//   placeholder,
//   keyboardType,
//   isTextArea,
//   value,
//   onChangeText,
//   namaState,
// }) => {
//   if (isTextArea) {
//     return (
//       <View style={styles.Page}>
//         <Text style={styles.Text}>{label}</Text>
//         <TextInput
//           placeholder={placeholder}
//           style={styles.TextInputArea}
//           keyboardType={keyboardType}
//           multiline={true}
//           numberOfLines={4}
//           value={value}
//           onChangeText={value => onChangeText(namaState, value)}
//         />
//       </View>
//     );
//   }
//   return (
//     <View style={styles.Page}>
//       <Text style={styles.Text}>{label}</Text>
//       <TextInput
//         placeholder={placeholder}
//         style={styles.TextInput}
//         keyboardType={keyboardType}
//         value={value}
//         onChangeText={value => onChangeText(namaState, value)}
//       />
//     </View>
//   );
// };

// export default InputData;

// const styles = StyleSheet.create({
//   Page: {
//     padding: 25,
//   },
//   Text: {fontFamily: 'TitilliumWeb-Bold', fontSize: 18, marginLeft: 5},
//   TextInput: {
//     backgroundColor: 'white',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   TextInputArea: {
//     backgroundColor: 'white',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     textAlignVertical: 'top',
//   },
// });

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  value,
  onChangeText,
  namaState,
}) => {
  return (
    <View style={styles.Page}>
      <Text style={styles.Text}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={isTextArea ? styles.TextInputArea : styles.TextInput}
        keyboardType={keyboardType}
        multiline={isTextArea}
        numberOfLines={isTextArea ? 4 : 1}
        value={value}
        onChangeText={value => onChangeText(namaState, value)}
      />
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  Page: {
    padding: 25,
  },
  Text: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    marginLeft: 5,
  },
  TextInput: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  TextInputArea: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
});
