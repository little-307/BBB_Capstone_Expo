import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import HeaderBranch from '../../assets/images/HeaderBranch.png';

export default function Header({name}) {
  console.log(name)
  return (
    <ImageBackground source={HeaderBranch} style={styles.header}>
      <Text style={styles.title}>{name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    // paddingTop: 38,
    // backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    color: '#31436A',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
