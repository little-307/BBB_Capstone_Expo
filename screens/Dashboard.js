import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectBranch } from '../state/branchSlice';

import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// importing components
import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { trunkData } from '../assets/data/branchData';

export default function Dashboard({navigation}) {
  // console.log(item)
  // const [branches, setBranches] = useState([
  //   {text: 'Education', key: '1'},
  //   {text: 'Health & Fitness', key: '2'},
  //   {text: 'Business', key: '3'},
  // ]);
  const [branchItem, setBranchItem] = useState()

  // NAVIGATION handler
  // const pressHandler = () => {
    // NAVIGATE AND BRING BRANCH DATA
    // navigation.navigate('BranchPage', {name: text}); 
    // console.log(text);
    // setBranches(prevBranches => {
    //   return prevBranches.filter(branch => branch.key !== key);
    // });
  // };

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
// console.log(useSelector(selectBranch))
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
              data={trunkData}
              renderItem={({item}) => (
                  <BranchItem 
                    navigation={navigation}
                    item={item} 
                    name={item.text} 
                    /> 
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
