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
import { getBranchName } from '../state/branchNameSlice';
import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';
import BranchInfo from './BranchInfo';

import { subBranchData } from '../assets/data/branchData';

import Logo2 from '../assets/images/Tree-logo2.png';

export default function SubBranchPage({navigation, item}) {
 const dispatch = useDispatch()
  const [branch, setBranch] = useState([ // changed to singular version of Branch from Branches
  
]);

  // Modal useState
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const [cardName, setCardName] = useState();
  const [cardDescription, setCardDescription] = useState();


  const selectedBranch = useSelector(getBranchName)
  console.log(selectedBranch)

  const pressHandler = id => {
      Alert.alert("Almost there, More Branches coming soon!")
    //  console.warn("Almost there, More layers coming soon!")
  };

  const viewHandler = (item) => {
    setCardDescription(item)
    setViewOpen(true)
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
      <Modal 
        transparent={true} 
        visible={modalOpen} 
        animationType='slide'
      >
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
          transparent={true} 
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
              data={subBranchData}
              renderItem={({item}) => (
                (item.parent === selectedBranch) ? 
                <BranchItem item={item} pressHandler={pressHandler} viewHandler={viewHandler} /> : null
             )}
            />
            {/* <AddBranch submitHandler={submitHandler} /> */}
            <Pressable>
              <AntDesign
                name='pluscircle'
                size={45}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
              />
            </Pressable>
          </View>
          </ImageBackground>
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
