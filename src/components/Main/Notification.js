import React, {Component} from 'react';
import {View, Text} from 'react-native';
export default class Notification extends Component {
  //removing header
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View>
        <Text>Notification</Text>
      </View>
    );
  }
}
