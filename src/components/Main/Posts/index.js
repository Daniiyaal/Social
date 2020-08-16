import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Card} from 'native-base';
import data from './data';
import PostsTopView from './PostsTopView';
import PostsBottomView from './PostsBottomView';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      viewPlayIcon: false,
      muted: true,
      heightVideo: 360,
      widthVideo: 1,
    };
  }
  load = ({duration}) => this.setState({duration}); // now here the duration is update on load video
  progress = ({currentTime}) => this.setState({currentTime}); // here the current time is upated

  onVideoPressed = () => {
    setTimeout(() => this.setState({viewPlayIcon: false}), 2000);
    this.setState({
      paused: !this.state.paused,
      viewPlayIcon: true,
    });
  };
  onMusicPressed = () => {
    this.setState({muted: !this.state.muted});
  };
  render() {
    const {paused, viewPlayIcon, muted} = this.state;
    const AllPosts = (item) => {
      // if (item.type == 'text') {
      //   return (
      //     <Card>
      //       <PostsTopView name={item.userName} time={item.time} />
      //       <View style={{left: '5%'}}>
      //         <Text style={{color: '#000', fontSize: 16}}>
      //           {item.postSource}
      //         </Text>
      //       </View>
      //       <PostsBottomView />
      //     </Card>
      //   );
      // } else if (item.type == 'image') {
      //   return (
      //     <Card>
      //       <PostsTopView name={item.userName} time={item.time} />
      //       <View
      //         style={{
      //           borderBottomWidth: 1,
      //           borderColor: '#ccc',
      //           borderTopWidth: 1,
      //         }}>
      //         <Image
      //           source={item.postSource}
      //           style={{
      //             height: Dimensions.get('screen').height / 1.8,
      //             width: '100%',
      //           }}
      //           resizeMethod="scale"
      //           resizeMode="cover"
      //         />
      //       </View>
      //       <PostsBottomView />
      //     </Card>
      //   );
      // }

      if (item.images == '') {
        return (
          <Card>
            <PostsTopView name={item.userName} time={item.time} />
            <View style={{left: '5%'}}>
              <Text style={{color: '#000', fontSize: 16}}>{item.content}</Text>
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
      } else if (item.type == 'video') {
        return (
          <Card>
            <PostsTopView name={item.userName} time={item.time} />
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#ccc',
                borderTopWidth: 1,
              }}>
              <TouchableOpacity
                style={styles.video}
                onPress={this.onVideoPressed}>
                <Video
                  autoplay={true}
                  repeat={false}
                  muted={muted}
                  posterResizeMode="cover"
                  paused={paused} // this will manage the pause and play
                  ref={(ref) => (this.video = ref)} //set current video
                  source={{uri: item.postSource}}
                  style={{...StyleSheet.absoluteFill}}
                  resizeMode="cover"
                  // onLoad={this.load}
                  onProgress={this.progress}
                  style={{
                    aspectRatio: 2,
                    width: '100%',
                  }}
                />
                {viewPlayIcon ? (
                  <Icon
                    style={styles.playIcon}
                    size={20}
                    name={paused ? 'play' : 'pause'}
                  />
                ) : null}
                <Icon
                  name={muted ? 'volume-off' : 'volume-up'}
                  size={30}
                  style={styles.musicIcon}
                  onPress={this.onMusicPressed}
                />
              </TouchableOpacity>
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

const styles = StyleSheet.create({
  playIcon: {
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  musicIcon: {
    color: 'white',
    position: 'absolute',
    marginRight: '10%',
    alignSelf: 'flex-end',
    bottom: '15%',
  },
});
