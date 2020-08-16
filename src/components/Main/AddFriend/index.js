import React, {Component} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import Requests from './Requests';
import Suggestions from './Suggestions';
import SearchBar from '../../SearchBar';

export default class AddFriend extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <ScrollView>
          <SearchBar />
          <Requests />
          <Suggestions />
        </ScrollView>
      </View>
    );
  }
}
