import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {Header} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Header searchBar rounded>
        <View style={styles.searchBar}>
          {/* <TouchableOpacity onPress={() => alert('drawer')}>
            <FontAwesome
              name={'bars'}
              color="#fff"
              size={22}
              style={styles.barIcon}
            />
          </TouchableOpacity> */}
          <TextInput
            placeholder="Search"
            placeholderTextColor="rgba(255,255,255,0.5)"
            underlineColorAndroid="#fff"
            style={styles.search}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <MaterialCommunityIcons
              name={'facebook-messenger'}
              style={styles.messengerIcon}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#009387',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '104%',
  },
  search: {
    width: '80%',
    left: 5,
    fontSize: 18,
  },
  messengerIcon: {
    color: '#fff',
    right: 10,
    top: 3,
  },
  barIcon: {
    left: 10,
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
