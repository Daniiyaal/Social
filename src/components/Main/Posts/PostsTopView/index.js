import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Thumbnail, CardItem} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostsTopView extends Component {
  render() {
    // return (
    //   <View>
    //     <Text>HHH</Text>
    //   </View>
    // );
    return (
      <CardItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Thumbnail
            source={require('../../../../assets/samplebg.png')}
            resizeMethod="scale"
          />
          <View style={{left: 3}}>
            <Text style={{fontWeight: '700', color: '#000'}}>Daniyal</Text>
            <Text>14:20</Text>
          </View>
        </View>
        {/* <Ionicons name="more" size={24} /> */}
      </CardItem>
    );
  }
}
