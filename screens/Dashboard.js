import React from 'react';

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
import { useDispatch } from 'react-redux';
//added a new slice to save the selected branch
// so the child BranchPage can determine which branches to show
import { saveBranchName } from '../state/branchNameSlice'; 

//importing data. Next week we can move this to a database if you want to. 
import { trunkData } from '../assets/data/branchData';

 

export default function Dashboard({navigation}) {
  const dispatch = useDispatch()

  // for adding branches - next step after styling?
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

  //pulled the pressHandler function back to the parent component 
  // Now passing it down as a callback (like you had it!!!)
  // This allows us to set the correct page to navigate
  // and send the branchName to redux 
  const pressHandler = (item) => {
    dispatch(saveBranchName(item.text))
    navigation.navigate('BranchPage');
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
              data={trunkData}
              renderItem={({item}) => (
                  <BranchItem 
                    item={item} 
                    pressHandler={pressHandler}
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
