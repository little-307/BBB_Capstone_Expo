import React {useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = () => {
    navigation.navigate('signUp');
    console.log(navigation.navigate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>
          Welcome{'\n'}
          Back
        </Text>
        <View style={styles.formView}>
          <TextInput //EMAIL
            style={styles.textInput}
            placeholder={'Email Address'}
            placeholderTextColor={'#fff'}
            value={userEmail}
            setValue={setUserEmail}
          />
          <TextInput //PASSWORD
            style={styles.textInput}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'#fff'}
            value={password}
            setValue={setPassword}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn} onPress={navigate}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
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
