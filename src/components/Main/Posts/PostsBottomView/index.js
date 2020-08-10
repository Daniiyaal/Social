import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CardItem} from 'native-base';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PostsBottomView extends Component {
  render() {
    return (
      <CardItem style={styles.reactSection}>
        <TouchableOpacity style={styles.reactContent}>
          <AntiDesign name="like2" size={24} color="gray" />
          <Text>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reactContent}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={22}
            color="gray"
          />
          <Text>Comment</Text>
        </TouchableOpacity>
      </CardItem>
    );
  }
}
const styles = StyleSheet.create({
  reactSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reactContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
