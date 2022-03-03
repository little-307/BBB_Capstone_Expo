import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignUp = ({navigation}) => {
  const {
    control, 
    handleSubmit, 
    formState: {errors}
  } = useForm();

  const onSubmitPressed = (data) => {
    console.log(data);
    // console.warn(data);
    console.log("Submit button pressed");
    navigation.navigate('Dashboard');
  }
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
    console.log("Sign in button pressed")
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Get Started</Text>
        <View style={styles.formView}>
          <CustomInput 
            name="username"
            placeholder='Username*' 
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username should be at least 3 characters long',
              },
              maxLength: {
                value: 24,
                message: 'Username should be max 24 characters long',
              },
            }}
            />
          <CustomInput 
            name="userEmail"
            placeholder='Email*' 
            control={control}
            rules={{required: 'Email is required'}}
            />
          <CustomInput 
            name="password"
            placeholder='Password*' 
            control={control}
            rules={{required: 'Password is required'}}
            secureTextEntry
            />
          <CustomInput 
            name="confirmPassword"
            placeholder='Confirm Password*' 
            control={control}
            rules={{required: 'Username is required'}}
            secureTextEntry
            />
          {/* <TextInput //NAME
            style={styles.textInput}
            placeholder={'Name*'}
            placeholderTextColor={'#fff'}
          />
          <TextInput //EMAIL
            style={styles.textInput}
            placeholder={'Email Address*'}
            placeholderTextColor={'#fff'}
          />
          <TextInput //PASSWORD
            style={styles.textInput}
            placeholder={'Password*'}
            secureTextEntry={true}
            placeholderTextColor={'#fff'}
          />
          <TextInput //PASSWORDconfirm
            style={styles.textInput}
            placeholder={'Confirm Password*'}
            secureTextEntry={true}
            placeholderTextColor={'#fff'}
          /> */}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity> */}
          <CustomButton 
            text="Submit"
            onPress={handleSubmit(onSubmitPressed)}/>
          <CustomButton
            text="Already have and account? Sign IN"
            onPress={onSignInPressed}
            type="TERTIARY"
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '30%',
  },
  formContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: '#6880b3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 15,
    paddingLeft: 10,
    marginTop: 20,
    color: '#fff',
  },
  button: {
    width: '90%',
    color: '#000',
    height: 52,
    backgroundColor: '#eee',
    borderRadius: 15,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6880b3',
  },
  signUpText: {
    color: 'gray',
  },
  signUpBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SignUp;
