import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, SplashIcon} from '../../Assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=> {
      navigation.replace('MainApp')
    },3000)
  },[navigation])

  return (
    <ImageBackground source={SplashBackground} style={styles.Background}>
      <Image source={SplashIcon} style={styles.Icon} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    width: 250,
    height: 140,
  },
});
