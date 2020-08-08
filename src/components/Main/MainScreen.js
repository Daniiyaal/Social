import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class MainScreen extends Component {
  //removing header
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name={'bars'} size={25} style={styles.drawerIcon} />
          </TouchableOpacity>
        </View>
        <Text>Main</Text>
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