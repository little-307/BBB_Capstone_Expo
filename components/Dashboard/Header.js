import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({name}) {
  console.log(name)
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
