import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
