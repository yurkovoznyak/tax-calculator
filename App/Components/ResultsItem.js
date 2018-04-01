import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import numeral from 'numeral/numeral';
import styles from './Styles/ResultsItemStyles';

export default class ResultsItem extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    optional: PropTypes.string,
  }

  render() {
    const { header, number, optional } = this.props;

    return (
        <View style={styles.mainContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemHeader}>{header}</Text>
            <Text style={styles.itemValue}>
              {`${numeral(number).format('0,0[.]00')} ₴`}
            </Text>
            {optional && optional !== '' &&
              <Text style={styles.itemHeader}>{optional}</Text>
            }
          </View>
        </View>
    );
  }
}
