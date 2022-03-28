
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Block, Accordion } from 'galio-framework';
import { useSelector, useDispatch } from 'react-redux';
import { getBranchName } from '../state/branchNameSlice';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { subBranchData } from '../assets/data/branchData';

export default function SubBranchPage({navigation, item}) {
 // const dispatch = useDispatch()
  const [branch, setBranch] = useState([ // changed to singular version of Branch from Branches
  
]);


  const selectedBranch = useSelector(getBranchName)
console.log(selectedBranch)
  const pressHandler = id => {
     console.log("load info for branch?")
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
      
      {/* <View style={styles.container}>
        <Header name={selectedBranch}/>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={subBranchData}
              renderItem={({item}) => (
                (item.parent === selectedBranch) ? 
                <BranchItem item={item} pressHandler={pressHandler} /> : null
             )}
            />
            <AddBranch submitHandler={submitHandler} />
          </View>
        </View>
      </View> */}
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
