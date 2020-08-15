import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bio from './Bio';
import FriendList from './FriendList';
import Posts from '../Posts';
var w = Dimensions.get('window').width;
export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.touch}
            //   onPress={}
          >
            <Image
              source={require('../../../assets/samplebg.png')}
              style={styles.imageContainer}
            />
          </TouchableOpacity>
          <View style={styles.camera}>
            <Icon name="camera" size={20} color="#000" />
          </View>
        </View>
        <Text style={styles.profileName}>Ali Virk</Text>
        <FlatList
          data={Bio}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.bio}>
              <View style={styles.bioDetails}>
                <Icon
                  name={item.iconName}
                  size={20}
                  color="rgba(0,0,0,0.5)"
                  style={{marginRight: 5}}
                />
                <Text style={{fontSize: 16}}>{item.description}</Text>
              </View>
            </View>
          )}
        />

        <FlatList
          data={FriendList}
          style={{flexDirection: 'column'}}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{marginTop: 10}}>
              <Image source={item.friendImage} style={styles.friendImage} />
              <Text style={styles.friendName}>{item.friendName}</Text>
            </View>
          )}
        />
        <View style={styles.hr}></View>
        <Text style={styles.posts}>Posts</Text>
        <Posts />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 100,
    bottom: 30,
  },
  touch: {
    borderRadius: 600,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: '#ddd',
    resizeMode: 'cover',
    marginTop: 40,
  },
  Bio: {
    marginLeft: 5,
    marginRight: 5,
  },
  bioDetails: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginLeft: 10,
  },
  profileName: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 5,
  },
  friendImage: {
    width: w / 3 - 20,
    height: 80,
    margin: 10,
    resizeMode: 'cover',
  },
  friendName: {
    color: '#000',
    alignSelf: 'center',
  },
  posts: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
    marginBottom: 10,
  },
});
