import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {id: 1, name: 'Ali', comment: 'comment test'},
        {id: 2, name: 'Hamza', comment: 'test done'},
        {id: 3, name: 'abc', comment: 'test done'},
        {id: 4, name: 'abc', comment: 'test done'},
      ],
    };
  }

  renderRow = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row', height: '50%'}}>
        <View
          style={{
            width: '95%',
            marginTop: 15,
            marginLeft: 15,
            paddingTop: 20,
          }}>
          <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 16}}>
            {item.name}
          </Text>
          <Text
            style={{
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              fontSize: 16,
              padding: 10,
              borderRadius: 10,
            }}>
            {item.comment}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            pagingEnabled
            data={this.state.comments}
            renderItem={this.renderRow}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>

        <View style={styles.commentContainer}>
          <Image
            source={require('../../../../assets/samplebg.png')}
            style={styles.profileImage}
          />
          <TextInput
            style={styles.inputComment}
            placeholder="Write your comment.."
            multiline={true}
          />
          <TouchableOpacity>
            <Icon name={'paper-plane'} size={25} style={styles.planeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputComment: {
    borderWidth: 1,
    width: '75%',
    borderColor: '#00000055',
    marginLeft: '2%',
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    marginLeft: 10,
    marginBottom: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    flex: 0.8,
  },
  planeIcon: {
    color: '#009387',
    marginLeft: 10,
    marginTop: 10,
  },
  commentSection: {
    backgroundColor: '#ccc',
    marginTop: 15,
    top: 10,
  },
});
