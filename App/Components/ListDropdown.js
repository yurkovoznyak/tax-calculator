import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/ListDropdown'
import { Body, Item, ListItem, Picker, Right } from 'native-base'

export default class ListDropdown extends Component {

  static propTypes = {
    selectedValue: PropTypes.string.isRequired,
    dropdownText: PropTypes.string.isRequired,
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedItem: undefined,
      selected: props.selectedValue
    }
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  getDropdownItems (items, category) {
    return items.map((item, idx) => {
      return (
        <Item label={item} value={`${category}_${idx}`}/>
      )
    })
  }

  render () {
    const {dropdownText, dropdownItems} = this.props

    return (
      <ListItem style={styles.settingsDropdownItem}>
        <Body>
        <Text>{dropdownText}</Text>
        </Body>
        <Right>
          <Picker
            mode="dropdown"
            style={{width: 150}}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            {this.getDropdownItems(dropdownItems, dropdownText)}
          </Picker>
        </Right>
      </ListItem>
    )
  }
}
