import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`]
        ]}>
      <Text 
        style={[
            styles.text, 
            styles[`text_${type}`]
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#3b71f3',
        width: '90%',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    container_PRIMARY: {
        backgroundColor: '#3b71f3',
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {

    }
})

export default CustomButton