import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';



export default function BranchItem({navigation, item, name}) {
  const pressHandler = () => {
    // NAVIGATE AND BRING BRANCH DATA
    navigation.navigate('BranchPage', {name: name.name}); 
    console.log({name});
    // setBranches(prevBranches => {
    //   return prevBranches.filter(branch => branch.key !== key);
    // });
  };
  // console.log(item);
  return (
    <TouchableOpacity onPress={() => pressHandler()}>
      <Text style={styles.item} key={item.key}>{item.text}</Text>
      {/* <Text style={styles.item}>"test"</Text> */}

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    // borderRadius: 1,
    borderRadius: 10,
  },
});
