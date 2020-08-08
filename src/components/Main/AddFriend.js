import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class AddFriend extends Component {
  //removing header
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View>
        <Text>Add</Text>
      </View>
    );
  }
}
