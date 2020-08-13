// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   Platform,
//   KeyboardAvoidingView,
//   SafeAreaView,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';
// import Firebase from '../Firebase/Firebase';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class Chat extends Component {
//   //removing header
//   static navigationOptions = {
//     headerShown: false,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//     };
//   }

//   get user() {
//     return {
//       _id: Firebase.uid,
//     };
//   }

//   componentDidMount() {
//     Firebase.get((message) =>
//       this.setState((previous) => ({
//         messages: GiftedChat.append(previous.messages, message),
//       })),
//     );
//   }

//   componentWillUnmount() {
//     Firebase.off();
//   }
//   render() {
//     const chat = (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={Firebase.send}
//         user={this.user}
//       />
//     );

//     if (Platform === 'android') {
//       return (
//         <View>
//           <KeyboardAvoidingView
//             style={{flex: 1}}
//             behavior="padding"
//             keyboardVerticalOffset={30}
//             enabled>
//             {chat}
//           </KeyboardAvoidingView>
//         </View>
//       );
//     }
//     return (
//       <SafeAreaView style={{height: 50, backgroundColor: '#009387'}}>
//         <TouchableOpacity
//           onPress={() => this.props.navigation.navigate('Home')}>
//           <Icon
//             name={'angle-left'}
//             size={35}
//             style={styles.backIcon}
//             color={'white'}
//           />
//         </TouchableOpacity>
//         {/* <View style={{backgroundColor: 'red'}}> */}
//         <View style={styles.messageBox}>{chat}</View>
//         {/* </View> */}
//       </SafeAreaView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   backIcon: {
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   messageBox: {
//     flex: 1,
//     // position: 'relative',
//     // position: 'absolute',
//     bottom: 0,
//     backgroundColor: 'blue',
//     top: 820,
//   },
// });

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {width} from 'react-native-dimension';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AntDesign} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
var radio_props = [
  {value: 0, label: 'Male'},
  {value: 1, label: 'Female'},
];
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [
        {id: 1, IMG: require('../../assets/samplebg.png'), Name: 'Usman'},
        {id: 2, IMG: require('../../assets/samplebg.png'), Name: 'Ali'},
        {id: 3, IMG: require('../../assets/samplebg.png'), Name: 'Asad'},
        {id: 4, IMG: require('../../assets/samplebg.png'), Name: 'Umer'},
        {id: 5, IMG: require('../../assets/samplebg.png'), Name: 'Mudassar'},
      ],
    };
  }

  render() {
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {},
      onOpen: (secId, rowId, direction) => {},
      right: [
        {
          onPress: () => {},
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
    };
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <AntDesign
        name="home"
        type="font-awesome"
        size={24}
        style={{color: tintColor}}
        containerStyle={{width: width(10)}}
      />
    ),
  };

  renderChat = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Messages')}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            marginTop: 2,
          }}>
          <View style={{width: '30%'}}>
            <Image
              style={{
                width: 40,
                height: 40,
                padding: 30,
                borderRadius: 50,
                margin: 10,
              }}
              source={item.IMG}
            />
          </View>
          <View style={{width: '70%'}}>
            <Text
              style={{
                paddingTop: 30,
                fontSize: 18,
                marginLeft: -20,
                marginTop: -5,
              }}>
              {item.Name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{backgroundColor: '#000', height: '4%'}}></View> */}

        <View style={{height: 50, backgroundColor: '#fff'}}>
          <View
            style={{
              marginLeft: wp('5%'),
              marginTop: 17,
              flexDirection: 'row',
            }}>
            <View style={{width: '50%'}}>
              <TouchableOpacity
                style={{alignSelf: 'flex-start'}}
                onPress={() => this.props.navigation.goBack(null)}>
                {/* <Text>Hello</Text> */}
                <Icon name="angle-left" color="#B1B1B1" size={25} />
              </TouchableOpacity>
            </View>

            <View style={{width: '50%'}}></View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            pagingEnabled
            data={this.state.chat}
            renderItem={this.renderChat}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f1',
  },
});
