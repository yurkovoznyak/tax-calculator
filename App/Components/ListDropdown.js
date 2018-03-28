import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/ListDropdown'
import { Body, Item, ListItem, Picker, Right } from 'native-base'
import I18n from "../I18n";

export default class ListDropdown extends Component {

  static propTypes = {
    selectedValue: PropTypes.string.isRequired,
    dropdownText: PropTypes.string.isRequired,
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    onItemSelect: PropTypes.func.isRequired
  };

  getDropdownItems (items, category) {
    return items.map((item, idx) => {
      return (
        <Item label={I18n.t(item)} value={`${item}`}/>
      )
    })
  }

  onValueChange (value, idx) {
    this.props.onItemSelect(this.props.dropdownItems[idx])
  }

  render () {
    const {dropdownText, dropdownItems} = this.props;

    return (
      <ListItem style={styles.settingsDropdownItem}>
        <Body>
        <Text>{dropdownText}</Text>
        </Body>
        <Right>
          <Picker
            mode="dropdown"
            style={{width: 150}}
            selectedValue={this.props.selectedValue}
            onValueChange={this.onValueChange.bind(this)}
          >
            {this.getDropdownItems(dropdownItems, dropdownText)}
          </Picker>
        </Right>
      </ListItem>
    )
  }
}
