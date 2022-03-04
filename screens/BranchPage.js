
// get this line to display 
// [{name: "education"}, [{name: "english"},"verbs", "nouns"], [{name: "react"},"usestate", "hooks"]]


import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { branchData } from '../assets/data/branchData';

export default function BranchPage({navigation, item}) {
  const [branch, setBranch] = useState([ // changed to singular version of Branch from Branches
    // {text: "math" , id: "1" }, 
    // {text: "english", id: "2" }, 
    // {text: "react", id: "3" },
]);
  // const route = useRoute();
  // console.log(route.params.name);

  let trunk = "education"

  const pressHandler = id => {
      // navigation.navigate('BranchPage');
      // console.log(id.text);
    // setBranches(prevBranches => {
    //   return prevBranches.filter(branch => branch.key !== key);
    // });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setBranch(prevBranch => {
        return [{text, id: Math.random().toString()}, ...prevBranch];
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
          <View style={styles.list}>
            <FlatList
              data={branchData}
              renderItem={({item}) => (
                <BranchItem item={item} pressHandler={pressHandler} />
             )}
            />
            <AddBranch submitHandler={submitHandler} />
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
