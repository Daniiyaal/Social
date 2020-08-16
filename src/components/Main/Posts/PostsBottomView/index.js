import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
} from 'react-native';
import {CardItem, Thumbnail} from 'native-base';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Comment from './Comment';

const ModalView = (props) => {
  return (
    <Modal visible={props.visibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.modalView2}>
          <TouchableOpacity
            onPress={props.changeVisibility}
            style={styles.closeModalButton}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
          <Comment />
        </View>
      </View>
    </Modal>
  );
};
export default class PostsBottomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      visibility: false,
    };
    this.setVisibility = this.setVisibility.bind(this);
  }

  // modal visibility for comment section
  setVisibility = () => {
    if (this.state.visibility == false) {
      this.setState({visibility: true});
    }
    if (this.state.visibility == true) {
      this.setState({visibility: false});
    }
  };
  async onValueChangeCat(value) {
    this.setState({selectedCategory: value});
  }
  changeVisibility = () => {
    this.setState({visibility: false});
  };

  // on select like button
  onSelect = (selectedNew) => {
    const {selected} = this.state;
    if (selected == selectedNew) {
      this.setState({selected: null});
    } else {
      this.setState({selected: selectedNew});
    }
  };
  render() {
    const {selected, visibility} = this.state;
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
        <ModalView
          changeVisibility={this.changeVisibility}
          visibility={visibility}
        />
        <TouchableOpacity
          style={styles.reactContent}
          onPress={this.setVisibility}>
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
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView2: {
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeModalButton: {
    position: 'absolute',
    right: 0,
    marginRight: 15,
    marginTop: 10,
  },
  doneText: {
    color: '#009387',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
