import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {CardItem, Thumbnail} from 'native-base';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PostsBottomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  onSelect = (selectedNew) => {
    const {selected} = this.state;
    if (selected == selectedNew) {
      this.setState({selected: null});
    } else {
      this.setState({selected: selectedNew});
    }
  };
  render() {
    const {selected} = this.state;
    return (
      <CardItem style={styles.reactSection}>
        <TouchableOpacity onPress={() => this.onSelect('Like')}>
          {selected == 'Like' ? (
            <View style={styles.reactContent}>
              <AntiDesign name="like2" size={24} color="#009387" />
              <Text style={styles.selectedText}>Like</Text>
            </View>
          ) : (
            <View style={styles.reactContent}>
              <AntiDesign name="like2" size={24} color="gray" />
              <Text>Like</Text>
            </View>
          )}
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
  selectedText: {
    color: '#009387',
  },
});
