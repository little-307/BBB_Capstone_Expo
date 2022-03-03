import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './state/store/store';

import Navigator from './routes/HomeStack';



export default function App() {
  LogBox.ignoreLogs( [
    "[react-native=gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  console.log("hello")
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
