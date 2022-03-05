
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getBranchName, saveBranchName } from '../state/branchNameSlice';
import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { branchData } from '../assets/data/branchData';

export default function BranchPage({navigation}) {
  const dispatch = useDispatch()
  const selectedBranch = useSelector(getBranchName)

  //const [branch, setBranch] = useState([ // changed to singular version of Branch from Branches]);


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

  const pressHandler = (item) => {
    dispatch(saveBranchName(item.text))
    navigation.navigate('subBranchPage');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
      <View style={styles.container}>
        <Header name={selectedBranch}/>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={branchData}
              renderItem={({item}) => (
                // here's the ternary that compares the item.parent in the datafile with 
                // the name of the branch selected in the previous screen
                // if they match, it loads. if not, null.
                (item.parent === selectedBranch) ? 
                <BranchItem item={item} pressHandler={pressHandler}/> : null
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
