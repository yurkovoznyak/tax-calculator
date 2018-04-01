import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/LabelStyles';

export default class Label extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    const { text } = this.props;

    return (
        <View>
          <Text style={styles.text}>{text.toUpperCase()}</Text>
        </View>
    );
  }
}
