import React, { useState } from 'react'

import {
    StyleSheet,
    View,
    Modal,
    Pressable,
} from 'react-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { branchData } from '../assets/data/branchData';
import ScrollContentViewNativeComponent from 'react-native/Libraries/Components/ScrollView/ScrollContentViewNativeComponent';

const ViewModal = () => {
    const [viewOpen, setViewOpen] = useState();
    return (
            <Modal transparent={false} visible={viewOpen} animationType='slide'>
                <View style={styles.vModal_Container}>
                    <View style={styles.modal_header}>
                        <Text>Branch Name Header </Text>
                        <MaterialIcons
                            name='close'
                            size={25}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setViewOpen(false)}
                        />
                    </View>
                    <Text>Branch Description text</Text>
                </View>
            </Modal>
    )
}

export default ViewModal

const styles = StyleSheet.create({
    vModal_Container: {
        flex: .7,
        width: 350,
        height: 500,
        borderColor: 'coral',
        borderWidth: 2,
        borderRadius: 30,
        marginTop: 100,
        marginBottom: 200,
        alignSelf: 'center',
        paddingTop: 20,
        backgroundColor: '#6880b3',
      },
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
      },
})
