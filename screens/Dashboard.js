import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectBranch } from '../state/branchSlice';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Pressable,
} from 'react-native';

// importing components
import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';

import { trunkData } from '../assets/data/branchData';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function Dashboard({navigation}) {
  // console.log(item)
  const [modalOpen, setModalOpen] = useState(false);
  const [branches, setBranches] = useState([
    // {text: 'Education', key: '1'},
    // {text: 'Health & Fitness', key: '2'},
    // {text: 'Business', key: '3'},
  ]);
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
        <Modal visible={modalOpen} animationType='slide' >
          <View style={styles.modalContainer}>
            {/* <Text>Hello said the MODAL</Text> */}
            <MaterialIcons 
              name='close'
              size={25}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
              // style={styles.add}
            />
            <AddBranch 
              submitHandler={submitHandler}
              style={styles.addBranch} />

          </View>
        </Modal>
        <Header />
        <View style={styles.content}>
          {/* <AddBranch submitHandler={submitHandler} /> */}
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
          <Pressable>
            <AntDesign 
              name='pluscircle'
              size={45}
              style={styles.modalToggle}
              onPress={() => setModalOpen(true)}
              // style={styles.add}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: .7,
    width: 350,
    borderColor: 'coral',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 300,
    alignSelf: 'center',
    paddingTop: 20,
    backgroundColor: '#6880b3',
  },
  addBranch: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  // addContainer: {
  //   flex: .5,
  //   width: 50,
  //   height: 50,
  //   borderColor: 'red',
  //   borderWidth: 2,
  //   borderRadius: 50,
  //   alignSelf: 'flex-end',
  //   paddingBottom: 40,
  //   paddingRight: 40,
  //   marginLeft: 5,
  //   // backgroundColor: 'red',
  // },
  modalToggle: {
    color: 'coral',
    // borderWidth: 2, 
    // borderRadius: 30,
    alignSelf: 'flex-end',
    padding: 10,
  },
  modalClose: {
    paddingTop: 0,
    marginRight: 0,
    color: 'white',
    borderWidth: 0,
  }
});
