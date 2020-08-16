import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {Thumbnail, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response.uri;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });

      }
    });
  };

  uploadPost() {
    alert('clicked');
    firestore()
      .collection('posts')
      .add({
        content: 'Travelling',
        images: this.state.filePath,
        videos: [],
        time: '',
        author: '123',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {name} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => alert('close')}>
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
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{width: 100, height: 100}}
              />
              {/* <Image
                source={{uri: this.state.filePath.uri}}
                style={{width: 250, height: 250}}
              /> */}
            </View>
          </View>
        </CardItem>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            style={styles.cameraIcon}
            onPress={this.chooseFile.bind(this)}>
            <Icon name={'camera'} size={20} />
            {/* <Text>Photo</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.cameraIcon}
            onPress={() => alert('video')}>
            <Icon name={'video-camera'} size={20} />
            {/* <Text>Photo</Text> */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00000055',
  },
  cardItem: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    paddingBottom: 150,
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
    width: '10%',
    borderRadius: 25,
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
