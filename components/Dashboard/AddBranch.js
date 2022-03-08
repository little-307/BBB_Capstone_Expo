import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function AddBranch({submitHandler}) {
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');

  const changeTextHandler = val => {
    // console.log(val);
    setText(val);
  };
  const changeDescHandler = val => {
    setDesc(val);
  }

  const pressHandler = () => {
    submitHandler(text);
    // console.log(text);
    setText('');
    setDesc('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Branch Title..."
        onChangeText={changeTextHandler}
        value={text}
      />
      <TextInput
        style={styles.descInput}
        multiline
        numberOfLines={5}
        placeholder="Add a description about your New Branch"
        onChangeText={changeDescHandler}
        value={desc}
      />
      <Button color="brown" onPress={pressHandler} title="Start Branch" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descInput: {
    height: 200,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 18,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});
