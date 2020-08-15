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
  moveToChat = () => {
    this.props.navigation.navigate('Chat');
  };
  render() {
    const {navigation} = this.props;
    return (
      <Header searchBar rounded>
        <View style={styles.searchBar}>
          {/* <FontAwesome name={'camera'} color="#fff" size={26} /> */}
          <TextInput
            placeholder="Search"
            placeholderTextColor="rgba(255,255,255,0.5)"
            underlineColorAndroid="#fff"
            style={styles.search}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat')}>
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
    width: '90%',
    left: 5,
    fontSize: 18,
  },
  messengerIcon: {
    color: '#fff',
    // left: 5,
    right: 10,
    top: 3,
  },
});
