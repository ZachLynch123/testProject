import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  createElementsFromList(list) {
    elements = list.map(item => {
      return(<Text>{item}</Text>)
      
    });
    return (elements);
  }

  render() {

    const groceryList = [
      'banana',
      'apple',
      'coconut'
    ];
    return (
      <View style={styles.container}>
        {this.createElementsFromList(groceryList)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
