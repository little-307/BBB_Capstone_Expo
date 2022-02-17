import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>About</Text>
      <Button title="Click Me" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 38,
  },
});

export default About;
