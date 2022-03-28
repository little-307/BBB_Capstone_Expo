import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const SignIn = ({navigation}) => {
  // const [username, setUsername] = useState('')
  // const [userEmail, setUserEmail] = useState('')
  // const [password, setPassword] = useState('')

  const {
    control, 
    handleSubmit, 
    formState: {errors}
  } = useForm();
  
  // const navigate = () => {
  //   navigation.navigate('signUp');
  //   console.log(navigation.navigate);
  // };

  const onSignInPressed = (data) => {
    console.log(data)
    console.log("Sign In button pressed!")
  }
  const onForgotPasswordPressed = () => {
    console.log('Forgot Password pressed')
  }
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
    console.log("Sign up button pressed")
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.logo}> </ImageBackground> */}
      <View style={styles.logo}>
        <Text style={styles.title}>Branch by Branch</Text>
      </View> 
      <View style={styles.formContainer}>
        <Text style={styles.heading}>
          Welcome{'\n'}
          Back
        </Text>
        <View style={styles.formView}>
          <CustomInput 
          name="username"
          placeholder='Username' 
          control={control}
          rules={{required: 'Username is required'}}
          />
          <CustomInput 
            name="password"
            placeholder='Password'
            control={control}
            rules={{
              required: 'Password is required', 
              minLength: {
                value: 3, 
                message: 'Password should be minimum 3 characters long',
              }
            }}
            secureTextEntry 
            />
          <CustomButton 
            text='Sign In' 
            onPress={handleSubmit(onSignInPressed)}/>
          <CustomButton 
            text='Forgot Password?' 
            onPress={onForgotPasswordPressed} 
            type='TERTIARY' 
            />
          <CustomButton
            text="Don't have and account? Sign Up!"
            onPress={onSignUpPressed}
            type="TERTIARY"
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    marginTop: 80,
    fontSize: 32,
    fontWeight: '800',
    color: 'coral',
  },
  formContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: '#6880b3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  heading: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 60,
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
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpText: {
    color: 'blue',
  },
  signUpBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SignIn;
