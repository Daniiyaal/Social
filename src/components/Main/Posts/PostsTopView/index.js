import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Thumbnail, CardItem} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostsTopView extends Component {
  render() {
    const {name, time} = this.props;
    return (
      <CardItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Thumbnail
            source={require('../../../../assets/samplebg.png')}
            resizeMethod="scale"
          />
          <View style={{left: 3}}>
            <TouchableOpacity>
              <Text style={{fontWeight: '700', color: '#000'}}>{name}</Text>
              <Text>{time}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <Ionicons name="more" size={24} /> */}
      </CardItem>
    );
  }
}
