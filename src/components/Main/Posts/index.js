import React, {Component} from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import {Card} from 'native-base';
import data from './data';
import PostsTopView from './PostsTopView';
import PostsBottomView from './PostsBottomView';

export default class Posts extends Component {
  render() {
    const AllPosts = (item) => {
      if (item.type == 'text') {
        return (
          <Card>
            <PostsTopView name={item.userName} time={item.time} />
            <View style={{left: '5%'}}>
              <Text style={{color: '#000', fontSize: 16}}>
                {item.postSource}
              </Text>
            </View>
            <PostsBottomView />
          </Card>
        );
      } else if (item.type == 'image') {
        return (
          <Card>
            <PostsTopView name={item.userName} time={item.time} />
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#ccc',
                borderTopWidth: 1,
              }}>
              <Image
                source={item.postSource}
                style={{
                  height: Dimensions.get('screen').height / 1.8,
                  width: '100%',
                }}
                resizeMethod="scale"
                resizeMode="cover"
              />
            </View>
            <PostsBottomView />
          </Card>
        );
      }
    };
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <View>{AllPosts(item)}</View>}
      />
    );
  }
}
