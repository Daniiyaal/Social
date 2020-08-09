import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Firebase from '../Firebase/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Chat extends Component {
  //removing header
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  get user() {
    return {
      _id: Firebase.uid,
    };
  }

  componentDidMount() {
    Firebase.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      })),
    );
  }

  componentWillUnmount() {
    Firebase.off();
  }
  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Firebase.send}
        user={this.user}
      />
    );

    if (Platform === 'android') {
      return (
        <View>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior="padding"
            keyboardVerticalOffset={30}
            enabled>
            {chat}
          </KeyboardAvoidingView>
        </View>
      );
    }
    return (
      <SafeAreaView style={{height: 50, backgroundColor: '#009387'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Icon
            name={'angle-left'}
            size={35}
            style={styles.backIcon}
            color={'white'}
          />
        </TouchableOpacity>
        {/* <View style={{backgroundColor: 'red'}}> */}
        <View style={styles.messageBox}>{chat}</View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  messageBox: {
    flex: 1,
    // position: 'relative',
    // position: 'absolute',
    backgroundColor: 'blue',
    top: 750,
  },
});
