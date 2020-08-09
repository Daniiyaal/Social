// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class SignUp extends Component {
//   render() {
//     return (
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.mainContainer}>
//           <Text style={styles.headingText}>SignUp</Text>
//           <View style={styles.nameContainer}>
//             <Icon name={'user-o'} size={20} style={styles.userIcon} />
//             <TextInput
//               style={styles.inputName}
//               placeholder="Full Name"
//               placeholderTextColor="#ababab"
//               maxLength={12}
//               // value={this.state.full_name}
//               // onChangeText={(full_name) => this.setState({full_name})}
//               autoFocus={true}
//             />
//           </View>

//           <View style={styles.passwordContainer}>
//             <Icon name={'key'} size={20} style={styles.keyIcon} />
//             <TextInput
//               style={styles.inputName}
//               placeholder="Password"
//               secureTextEntry={true}
//               //   keyboardType="Password"
//               placeholderTextColor="#ababab"
//               maxLength={20}
//               // value={this.state.full_name}
//               // onChangeText={(full_name) => this.setState({full_name})}
//               autoFocus={true}
//             />
//           </View>

//           <View style={styles.passwordContainer}>
//             <Icon name={'key'} size={20} style={styles.keyIcon} />
//             <TextInput
//               style={styles.inputName}
//               placeholder=" Confirm Password"
//               secureTextEntry={true}
//               //   keyboardType="Password"
//               placeholderTextColor="#ababab"
//               maxLength={20}
//               // value={this.state.full_name}
//               // onChangeText={(full_name) => this.setState({full_name})}
//               autoFocus={true}
//             />
//           </View>

//           <View style={styles.phoneContainer}>
//             <Icon name={'mobile'} size={20} style={styles.mobileIcon} />
//             <TextInput
//               style={styles.inputName}
//               placeholder="Phone Number"
//               keyboardType="phone-pad"
//               placeholderTextColor="#ababab"
//               maxLength={12}
//               // value={this.state.full_name}
//               // onChangeText={(full_name) => this.setState({full_name})}
//               autoFocus={true}
//             />
//           </View>

//           <View style={styles.nextButton}>
//             <TouchableOpacity
//               //   disabled={loading}
//               //   onPress={() => this.userSignUp(signIn)}
//               style={styles.buttonView}>
//               <Text style={styles.buttonText}>SignUp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   headingText: {
//     fontSize: 25,
//     color: '#1d9c73',
//     marginLeft: '5%',
//     paddingTop: '5%',
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     marginLeft: '5%',
//     width: '85%',
//     borderRadius: 30,
//     padding: 2,
//     marginTop: 30,
//     borderWidth: 1,
//     borderColor: '#555',
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     marginLeft: '5%',
//     width: '85%',
//     borderRadius: 30,
//     padding: 2,
//     marginTop: 15,
//     borderWidth: 1,
//     borderColor: '#555',
//   },
//   userIcon: {
//     left: 10,
//     top: 15,
//   },
//   inputName: {
//     left: 15,
//     fontSize: 18,
//     flex: 0.9,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     marginLeft: '5%',
//     width: '85%',
//     borderRadius: 30,
//     padding: 2,
//     borderWidth: 1,
//     borderColor: '#555',
//     marginTop: 15,
//   },
//   keyIcon: {
//     left: 10,
//     top: 15,
//   },
//   mobileIcon: {
//     left: 10,
//     top: 15,
//   },
//   buttonView: {
//     borderWidth: 1,
//     borderColor: 'rgba(0,0,0,0.2)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%',
//     height: 60,
//     backgroundColor: '#1d9c73',
//     borderRadius: 70,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: '10%',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
// import Auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    mobile: '',
    confirm_password: '',
    check_textInputChange: false,
    check_mobileInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const mobileInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        mobile: val,
        check_mobileInputChange: true,
      });
    } else {
      setData({
        ...data,
        mobile: val,
        check_mobileInputChange: false,
      });
    }
  };

  const emailInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const onComplete = () => {
    this.props.navigation.navigate('Chat', {name: this.state.username});
  };
  const signUp = () => {
    // const {password, confirmPassword, username, email, accept} = this.state;
    // if (password !== confirmPassword) {
    //   alert('Password did not match');
    //   return false;
    // }
    // if (username.length == 0) {
    //   Toast.show('Please enter a username to proceed', Toast.LONG);
    // } else {
    this.props.navigation.navigate('OTPScreen');

    //   if (accept === true) {
    //     console.log('sign up if');
    //     this.setState({
    //       isLoading: true,
    //     });
    //     auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((res) => {
    //         console.log('response is : ', res);
    //         res.user.updateProfile({
    //           displayName: username,
    //         });
    //         console.log('response is : ', res);
    //         alert('User account created & signed in!');
    //         this.props.navigation.navigate('OTPScreen');
    //       })
    //       .catch((error) => {
    //         if (error.code === 'auth/email-already-in-use') {
    //           alert('That email address is already in use!');
    //         }

    //         if (error.code === 'auth/invalid-email') {
    //           alert('That email address is invalid!');
    //         }

    //         if (error.code === 'auth/weak-password') {
    //           alert('Password should be at least 6 characters');
    //         }

    //         console.error(error);
    //       });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Mobile
            </Text>
            <View style={styles.action}>
              <FontAwesome5 name="mobile-alt" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Mobile Number"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType="number-pad"
                onChangeText={(val) => mobileInputChange(val)}
              />
              {data.check_mobileInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Email
            </Text>
            <View style={styles.action}>
              <FontAwesome5 name="mobile-alt" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email Address"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType="number-pad"
                onChangeText={(val) => emailInputChange(val)}
              />
              {data.check_emailInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Confirm Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => navigation.navigate('CodeVerification')}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#009387',
                    },
                  ]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
