import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
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
import BranchInfo from './BranchInfo';

import { branchData } from '../assets/data/branchData';

import Logo2 from '../assets/images/Tree-logo2.png';

export default function BranchPage({navigation}) {
  const dispatch = useDispatch()
  const selectedBranch = useSelector(getBranchName)

  const [cardName, setCardName] = useState();
  const [cardDescription, setCardDescription] = useState();

  //const [branch, setBranch] = useState([ // changed to singular version of Branch from Branches]);

  // Modal useState
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

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

  const viewHandler = (item) => {
    // setCardName(item.text)
    setCardDescription(item);
    setViewOpen(true);
  };



  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
      <View style={styles.container}>
      <Modal transparent={true} visible={modalOpen} animationType='slide'>
          <View style={styles.mo_container}>
            {/* <Text>Hello says the Modal</Text> */}
            <MaterialIcons
              name='close'
              size={25}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <AddBranch />
          </View>
        </Modal>
        {/* Info Modal */}
        <Modal 
          transparent={false} 
          visible={viewOpen} 
          animationType='slide'
          
          >
            <BranchInfo cardDescription={cardDescription} />
          <View style={styles.vModal_Container}>
              <MaterialIcons
                  name='close'
                  size={25}
                  style={{...styles.modalToggle, ...styles.modalClose}}
                  onPress={() => setViewOpen(false)}
              />
          </View>

          
        </Modal>
        <Header name={selectedBranch}/>
        <View style={styles.content}>
          <ImageBackground source={Logo2} style={styles.bgImage} resizeMode='cover' >

            <View style={styles.list}>
              <FlatList
                data={branchData}
                renderItem={({item}) => (
                  // here's the ternary that compares the item.parent in the datafile with 
                  // the name of the branch selected in the previous screen
                  // if they match, it loads. if not, null.
                  (item.parent === selectedBranch) ? 
                  <BranchItem item={item} pressHandler={pressHandler} viewHandler={viewHandler} /> : null
              )}
              />
              </View>
              <Pressable>
                <AntDesign
                  name='pluscircle'
                  size={45}
                  style={styles.modalToggle}
                  onPress={() => setModalOpen(true)}
                />
              </Pressable>
            
          </ImageBackground>
          {/* {(cardName) ? 
          console.log(cardName): null} 
          =====BranchCard Modal====*/} 
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
  mo_container: {
    flex: .7,
    width: 350,
    height: 500,
    borderColor: 'coral',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 100,
    marginBottom: 200,
    alignSelf: 'center',
    // paddingTop: 20,
    backgroundColor: '#6880b3',
  },
  vModal_Container: {
    // flex: 1,
    paddingTop: 10,
    marginBottom: 100,
    alignItems: 'center',
    backgroundColor: '#6880b3',
    // borderRadius: 30,

  },
  content: {
    paddingTop: 20,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  modalToggle: {
    color: 'coral',
    // borderWidth: 2, 
    // borderRadius: 30,
    alignSelf: 'flex-end',
    padding: 10,
    // marginRight: 40,
  },
  modalClose: {
    color: 'black',
    // marginTop: 10,
  },
  startBranch: {
    alignSelf: 'center',
  },
  bgImage: {
    height: '85%',
    width: '100%',
    marginTop: -20,
    // marginHorizontal: -50,
  }
});
