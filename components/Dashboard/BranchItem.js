import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function BranchItem({pressHandler, item}) {
  console.log(item.key);
  return (
    <TouchableOpacity onPress={() => pressHandler(item)}>
      <Text style={styles.item} key={item.key}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    // borderRadius: 1,
    borderRadius: 10,
  },
});
