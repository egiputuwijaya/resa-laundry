import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';

const Gap = ({height, width}) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;

const styles = StyleSheet.create({});
