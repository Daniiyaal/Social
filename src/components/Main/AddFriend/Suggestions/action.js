import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './style';
export default class Action extends Component {
  render() {
    return (
      <View style={styles.actionButton}>
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.delete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
