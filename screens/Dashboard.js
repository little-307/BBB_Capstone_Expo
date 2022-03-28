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
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// importing components
import Header from '../components/Dashboard/Header';
import BranchItem from '../components/Dashboard/BranchItem';
import AddBranch from '../components/Dashboard/AddBranch';
import ViewModal from '../components/ViewModal';
import BranchPage from '../screens/BranchPage';
import BranchInfo from '../screens/BranchInfo';

import { useDispatch } from 'react-redux';
//added a new slice to save the selected branch
// so the child BranchPage can determine which branches to show
import { saveBranchName } from '../state/branchNameSlice'; 

//importing data. Next week we can move this to a database if you want to. 
import { trunkData } from '../assets/data/branchData';
import CustomButton from '../components/CustomButton/CustomButton';

import Logo from '../assets/images/Tree-logo.png';
import Logo2 from '../assets/images/Tree-logo2.png';
// import { ImageBackground } from 'react-native-web';

 

export default function Dashboard({navigation, item}) {
  const dispatch = useDispatch()

  // Modal useState
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const [cardName, setCardName] = useState();
  const [cardDescription, setCardDescription] = useState();

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

  const viewHandler = (item) => {
    // console.log('test');
    setCardDescription(item)
    setViewOpen(true)
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
      {/* <ImageBackground source={Logo} style={{width: '100%', height: '100%'}} resizeMode='cover' > */}
      <View style={styles.container}>
        <Modal 
          transparent={true} 
          visible={modalOpen} 
          animationType='slide'
        >
          <View style={styles.mo_container}>
            {/* <Text>Hello says the Modal</Text> */}
            <MaterialCommunityIcons
              name='close-thick'
              size={25}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <AddBranch />

          </View>
        </Modal>
        {/* <ViewModal /> */}

        {/* Info Modal */}
        <Modal 
          transparent={true} 
          visible={viewOpen} 
          animationType='slide'
        >
          <BranchInfo cardDescription={cardDescription} />
          <View style={styles.vModal_Container}>
          
          {/* match Icon to addbranch modal, and relocate close function to BranchInfo.js */}
              <MaterialIcons  
                  name='close'
                  size={25}
                  style={{...styles.modalToggle, ...styles.modalClose}}
                  onPress={() => setViewOpen(false)}
              />
          </View>

          
        </Modal>
        <Header />
        <View style={styles.content}>
          {/* <AddBranch submitHandler={submitHandler} /> */}
          <ImageBackground source={Logo2} style={styles.bgImage} resizeMode='cover' >
            <View style={styles.list}>
              <FlatList
                data={trunkData}
                renderItem={({item}) => (
                    <BranchItem 
                      item={item} 
                      pressHandler={pressHandler}
                      viewHandler={viewHandler}
                      setCardDescription={setCardDescription}
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
            />
          </Pressable>
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
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
