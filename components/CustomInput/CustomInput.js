import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (
    <Controller 
      control={control}
      name={name}
      rules={{rules}}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) =>  (
        <>
          <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
            <TextInput 
              value={value} 
              onChangeText={onChange} 
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry} 
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'ERROR'}</Text>
          )}
        </>
      )}
    />
  )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width: '90%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        fontSize: 20,
        paddingVertical: 10,
    },
    error: {
      color: 'red',
      alignSelf: 'stretch',
      paddingHorizontal: 20
    },
})

export default CustomInput

{/* <TextInput 
        value={value} 
        onChangeText={setValue} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} 
        style={styles.input}
        /> */}