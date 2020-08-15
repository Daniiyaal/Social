import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card, Thumbnail} from 'native-base';

export default class UploadPosts extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Card style={styles.uploadPosts}>
        <TouchableOpacity>
          <Thumbnail source={require('../../../assets/samplebg.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 1, height: 60}}
          onPress={() => navigation.navigate('CreatePost')}>
          <View style={styles.uploadPostsTextField}>
            <Text style={{left: 10}}>Write Something...</Text>
          </View>
        </TouchableOpacity>
        {/* 
        <TouchableOpacity>
          <Ionicons name="md-images" size={30} />
          <Text>Photo</Text>
        </TouchableOpacity> */}
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  uploadPosts: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  uploadPostsTextField: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 0.9,
    borderRadius: 20,
    top: 3,
    bottom: 3,
    height: 60,
    justifyContent: 'center',
  },
});
