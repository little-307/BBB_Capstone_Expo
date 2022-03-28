import React, {useState}from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button, } from 'react-native';
import { Octicons } from '@expo/vector-icons';




export default function BranchItem({ item, pressHandler, viewHandler, setCardDescription}) {
  // const [viewOpen, setViewOpen] = useState(false);
  
  return (
    <TouchableOpacity onPress={() => pressHandler(item)}>
      <View style={styles.itemRow}>
        <Text style={styles.item} key={item.key}>{item.text}</Text>
        {/* add view modal button */}
        
          <Octicons 
            name="info" 
            size={38} 
            color='coral'
            style={styles.icon}
            onPress={ () => {
              viewHandler(item)
              // setViewOpen(true)
            }}  
          />
        {/* <Button title='view' onPress={ () => {
          viewHandler(),
          setViewOpen(true)
        }} /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 250,
    padding: 12,
    marginTop: 16,
    borderColor: '#6880b3',
    borderWidth: 2,
    borderStyle: 'dashed',
    // borderRadius: 1,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    opacity: 0.95,
    fontWeight: 'bold',
    fontSize: 24,
  },
  itemRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    // opacity: 0.9,
    // paddingLeft: 50,
  },
  icon: {
    marginTop: 16,
    marginLeft: 8,
    alignSelf: 'center',
    // backgroundColor: 'lightgreen',
  }
});
