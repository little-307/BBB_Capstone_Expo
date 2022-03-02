
// get this line to display 
[{name: "education"}, [{name: "english"},"verbs", "nouns"], [{name: "react"},"usestate", "hooks"]]


import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

export default function Dashboard({navigation}) {
  const [branches, setBranches] = useState([
      {name: "education"}, 
    [{name: "english"},"verbs", "nouns"], 
    [{name: "react"},"usestate", "hooks"]
]);

  const pressHandler = key => {
    // setBranches(prevBranches => {
    //   return prevBranches.filter(branch => branch.key !== key);
    // });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setBranches(prevBranches => {
        return [{text, key: Math.random().toString()}, ...prevBranches];
      });
    } else {
      Alert.alert('OOPS', 'Branch must be over 3 characters long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed'),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddBranch submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={branches}
              renderItem={({item}) => (
                <BranchItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
