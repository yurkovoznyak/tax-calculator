import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/ResultsConditionsStyles';
import I18n from '../I18n';

export default class ResultsConditions extends Component {
  static propTypes = {
    taxSystem: PropTypes.string.isRequired,
    taxGroup: PropTypes.string.isRequired,
    vatEnabled: PropTypes.bool,
  }

  render() {
    const { taxSystem, taxGroup, vatEnabled } = this.props;

    return (
        <View style={styles.mainContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{I18n.t('taxSystem')}</Text>
            <Text style={styles.itemValue}>{taxSystem}</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{I18n.t('taxGroup')}</Text>
            <Text style={styles.itemValue}>{taxGroup}</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{I18n.t('vat')}</Text>
            <Text style={styles.itemValue}>
              {I18n.t(vatEnabled ? 'vatIncluded' : 'vatExcluded')}
            </Text>
          </View>
        </View>
    );
  }
}
