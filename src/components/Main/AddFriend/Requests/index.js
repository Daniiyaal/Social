import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Thumbnail, Card, CardItem, Content, Container} from 'native-base';

import data from './data';
import Action from './action';
import styles from './style';
export default class Requests extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.friendRequest}>Friend Requests</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Card transparent>
              <CardItem style={{flexDirection: 'row'}}>
                <Thumbnail
                  source={item.profileImage}
                  resizeMethod="scale"
                  large
                />
                <View style={styles.userDetail}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.mutualFriends}>{item.mutualFriends}</Text>
                  <Action />
                </View>
              </CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}
