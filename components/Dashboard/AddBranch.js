import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function AddBranch({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    // console.log(val);
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    // console.log(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new Branch..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="brown" onPress={pressHandler} title="Start Branch" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
