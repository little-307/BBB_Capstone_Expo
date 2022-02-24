import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TwoAddBranch = ({title}) => {
  return (
    <View>
      <TextInput placeholder="Add Branch..." style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add Branch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
  },
  btn: {
    backgroundColor: '#ddd',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'slateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TwoAddBranch;
