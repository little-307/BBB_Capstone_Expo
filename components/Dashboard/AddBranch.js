import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

export default function AddBranch({submitHandler}) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const changeHandler = val => {
    // console.log(val);
    setText(val);
    // setDescription(val);
  };
  const changeDescriptionHandler = val => {
    // console.log(val);
    // setText(val);
    setDescription(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    console.log(text);
    setText('');
    setDescription('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Branch..."
        onChangeText={changeHandler}
        value={text}
      />
      <TextInput
        style={styles.descriptionInput}
        multiline={true}
        numberOfLines={5}
        placeholder="Add a description about your New Branch. Or use use to Journal about this branch"
        onChangeText={changeDescriptionHandler}
        value={description}
      />
      <Button color="brown" onPress={pressHandler} title="Start Branch" />
      {/* <CustomButton

      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    height: 40,
    width: 300,
    marginBottom: 10,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: 6,
    // borderBottomWidth: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'coral',
    backgroundColor: '#f2f2f2'
  },
  descriptionInput: {
    alignSelf: 'center',
    height: 200,
    width: 300,
    borderColor: 'coral',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 18,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});
