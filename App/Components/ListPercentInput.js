import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/ListMoneyInput'
import { Body, ListItem, Right } from 'native-base'
import TextInputMask from 'react-native-text-input-mask'

export default class ListPercentInput extends Component {

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  render () {
    const {placeholder, value, onChangeValue} = this.props

    return (
      <ListItem style={styles.settingsDropdownItem}>
        <Body>
        <Text style={styles.placeholder}>{`${placeholder}, %`}</Text>
        </Body>
        <Right>
          <View style={styles.textInputContainer}>
            <TextInputMask
              keyboardType={"numeric"}
              autoCorrect={false}
              onChangeText={(formatted) => onChangeValue(Number(formatted))}
              value={value}
              style={styles.textInputStyles}
              refInput={ref => { this.input = ref }}
              mask={"[999].[99]"}
            />
          </View>
        </Right>
      </ListItem>
    )
  }
}
