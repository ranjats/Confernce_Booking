import React from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          {/* <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          /> */}
        </View>
      );
    }
  }
  
  