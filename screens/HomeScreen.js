import React from 'react';
import {View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Baking App',
    };
    render() {
      return (
        <Button
          title="70% hydration Recipe"
          onPress={() => this.props.navigation.navigate('Sourdough', {
            quantity: 1,

          })}
        />
      );
    }
}

export default HomeScreen;


