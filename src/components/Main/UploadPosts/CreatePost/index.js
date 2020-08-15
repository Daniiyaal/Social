import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Thumbnail, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: null,
    };
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
      mediaType: 'any',
    }).then((images) => {
      this.setState({
        image: null,
        images: images.map((i) => {
          console.log('received image', i);
          return {
            uri: i.path,
            width: i.width,
            height: i.height,
            mime: i.mime,
          };
        }),
      });
    });
  }
  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderVideo(video) {
    console.log('rendering video');
    return (
      <View style={{height: 100, width: 100}}>
        <Video
          source={{uri: video.uri, type: video.mime}}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={(e) => console.log(e)}
          onLoad={(load) => console.log(load)}
          repeat={true}
        />
      </View>
    );
  }

  uploadPost() {
    alert('clicked');
    firestore()
      .collection('posts')
      .add({
        content: 'Travelling',
        images: [],
        videos: [],
        time: '',
        author: 'userID',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderImage(image) {
    return <Image style={{width: 100, height: 100}} source={image} />;
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }
  render() {
    const {name} = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}>
              <Icon name={'close'} size={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.uploadPost()}>
              <Text style={styles.postText}>POST</Text>
            </TouchableOpacity>
          </View>

          <CardItem style={styles.cardItem}>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail
                source={require('../../../../assets/samplebg.png')}
                resizeMethod="scale"
              />

              <View
                style={{
                  left: 3,
                  flexDirection: 'column',
                  flex: 1,
                }}>
                <Text style={styles.nameText}>Ali Virk</Text>
                <TextInput
                  placeholder="Write Something..."
                  style={styles.input}
                  multiline={true}
                />
                <ScrollView>
                  {this.state.image ? this.renderAsset(this.state.image) : null}
                  {this.state.images
                    ? this.state.images.map((i) => (
                        <View key={i.uri}>{this.renderAsset(i)}</View>
                      ))
                    : null}
                </ScrollView>
              </View>
              <View>
                <TouchableOpacity onPress={this.pickMultiple.bind(this)}>
                  <Image
                    source={require('../../../../assets/camera.png')}
                    style={styles.cameraImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </CardItem>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#00000055',
  },
  cardItem: {
    backgroundColor: '#fff',
  },
  nameText: {
    fontWeight: '700',
    color: '#000',
    marginTop: 5,
    left: 3,
  },
  input: {
    marginTop: -10,
  },
  postText: {
    fontSize: 16,
  },
  cameraIcon: {
    // top: 75,
    // width: '10%',
    // borderRadius: 25,
    // height: 30,
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  cameraImage: {
    height: 30,
    width: 45,
    marginTop: 5,
  },
});
