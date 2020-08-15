import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
console.disableYellowBox = true;

import SearchBar from '../SearchBar';
import UploadPosts from './UploadPosts';
import Posts from './Posts';
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.user.name,
      uid: this.props.navigation.state.params.user.uid,
    };
  }
  //removing header
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <SearchBar />

        <ScrollView showsVerticalScrollIndicator={false}>
          <UploadPosts />
          <Posts />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: '8%',
    backgroundColor: '#1d937c',
  },
  drawerIcon: {
    marginLeft: 10,
    marginTop: 15,
  },
});
