
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Pressable,
} from 'react-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { getBranchName, saveBranchName } from '../state/branchNameSlice';

import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { branchData } from '../assets/data/branchData';

export default function BranchInfo({cardDescription}) {




  const pressHandler = (item) => {
    dispatch(saveBranchName(item.text))
    navigation.navigate('subBranchPage');
  };



  console.log(cardDescription)
  return (
    
      <View style={styles.container}>
      
        <Header name={cardDescription.text} style={styles.header} />
        <View style={styles.content}>
          <ScrollView style={styles.list}>
            {/* <Text>{cardDescription.text}</Text> */}
            <Text style={styles.description_text}>{cardDescription.description}</Text>
            {/* <FlatList
              data={branchData}
              renderItem={({item}) => (
                // here's the ternary that compares the item.parent in the datafile with 
                // the name of the branch selected in the previous screen
                // if they match, it loads. if not, null.
                (item.parent === selectedBranch) ? 
                <BranchItem item={item} pressHandler={pressHandler} viewHandler={viewHandler} /> : null
             )}
            /> */}
            {/* <AddBranch submitHandler={submitHandler} /> */}
            {/* <Pressable>
              <AntDesign
                name='pluscircle'
                size={45}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
              />
            </Pressable> */}
          </ScrollView>
          {/* {(cardName) ? 
          console.log(cardName): null} 
          =====BranchCard Modal====*/} 
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#6880b3',
    opacity: 0.95,
  },
  list: {
    height: 550,
    borderWidth: 2,
    borderColor: 'coral',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 16,
    backgroundColor: 'white',
  },
  description_text: {
    marginVertical: 16,
    paddingHorizontal: 16,

  },
});
