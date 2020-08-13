'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default class CodeVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_code: '',
      timer: 10,
    };
  }
  componentDidMount() {
    // this.interval = setInterval(
    //   () =>
    //     this.setState((prevState) => ({
    //       timer: prevState.timer - 1,
    //     })),
    //   1000,
    // );
  }

  componentDidUpdate() {
    // if (this.state.timer === 0) {
    //   clearInterval(this.interval);
    // }
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }
  onComplete(inputtedPin) {
    if (inputtedPin == '1234') {
      this.props.navigation.navigate('MainScreen');
    }
  }
  render() {
    const {pin_code} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Last Step!</Text>
        </View>
        <SafeAreaView style={styles.action}>
          <OTPInputView
            style={{
              width: '70%',
              height: 100,
              marginLeft: '15%',
              marginTop: 200,
            }}
            pinCount={4}
            keyboardType="phone-pad"
            minutes={2}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            //   onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            //   onCodeFilled={code => {
            //     ToastAndroid.show(
            //       `Code is ${code}, you are good to go!`,
            //       ToastAndroid.LONG,
            //     );
            //   }}
            onCodeFilled={(code) => this.onComplete(code)}
            placeholderCharacter="*"
            placeholderTextColor="#000"
          />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  action: {
    height: 500,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    marginTop: 50,
    // alignSelf: 'center',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
  },
  OTPBox: {
    width: '70%',
    height: 100,
    marginLeft: '15%',
  },
});
