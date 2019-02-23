import React from 'react'
import { View, Text } from 'react-native';


class Hydration70 extends React.Component {
    
    

    render() {
        const {navigation } = this.props;
        const name = navigation.getParam('name', 'problem getting name');
        return(
            <View>
                <Text>Hello from Hydration70 and {name}</Text>
            </View>
        )
    }
}

export default Hydration70;