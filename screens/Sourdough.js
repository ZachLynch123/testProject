import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


class Sourdough extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        flour: 500,
        water: 0,
        salt: 0,
        starter: 0,
    }
    }
    

    getWater = (flour) => {
        let temp = 70 * flour;
        return temp / 100;
    }

    getWheatFlour = (flour) => {
        let temp = 15 * flour;
        return temp / 100;
    }
    
    getStarter = (flour) => {
        let temp = 25 * flour;
        return temp / 100;
    }

    getSalt = (flour) => {
        let temp = 2 * flour;
        return temp / 100;
    }


    // comment

    render() {
        const { navigation } = this.props;
        const { flour, water, salt, starter } = this.state;
        const name = navigation.getParam('name', 'problem getting name');
        return(
            <View style={styles.container}>
                <Text>For this Sourdough loaf you will need a 70% hydration dough. For one loaf you will need {flour}g of flour, {this.getWheatFlour(flour)}g wheat flour {this.getWater(flour)}g water, {this.getStarter(flour)}g starter, and {this.getSalt(flour)}g salt </Text>
            </View>
        )
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

export default Sourdough;