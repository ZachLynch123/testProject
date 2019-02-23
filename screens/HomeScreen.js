import React from 'react';
import {View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Baking App',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="70% hydration Recipe"
          onPress={() => this.props.navigation.navigate('Hydration70', {
            name: 'zach'
          })}
        />
      );
    }
}

export default HomeScreen;


/* const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); */