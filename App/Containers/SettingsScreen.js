import React, { Component } from 'react'
import { Image } from 'react-native'

import { Images } from '../Themes'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text, Form, Picker, ListItem
} from 'native-base'

const Item = Picker.Item;

// Styles
import styles from './Styles/SettingsScreenStyles'
import I18n from '../I18n'
import Label from '../Components/Label'
import ListDropdown from '../Components/ListDropdown'

export default class SettingsScreen extends Component {
  render () {
    return (
    <Container style={styles.container}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
        <Title style={styles.title}>{ I18n.t('settings') }</Title>
        </Body>
        <Right/>
      </Header>

      <Content padder>




        {/*<ListItem style={styles.settingsDropdownItem}>*/}
          {/*<Body>*/}
          {/*<Text>{I18n.t('settingsPerson')}</Text>*/}
          {/*</Body>*/}
          {/*<Right>*/}
            {/*<Picker*/}
              {/*note*/}
              {/*mode="dialog"*/}
              {/*style={{ width: 150 }}*/}
              {/*selectedValue={this.state.selected1}*/}
              {/*onValueChange={this.onValueChange.bind(this)}*/}
            {/*>*/}
              {/*<Item label={I18n.t('settingsPersonIndividual')} value="key0" />*/}
            {/*</Picker>*/}
          {/*</Right>*/}
        {/*</ListItem>*/}
        {/*<ListItem style={styles.settingsDropdownItem}>*/}
          {/*<Body>*/}
          {/*<Text>{I18n.t('settingsPerson')}</Text>*/}
          {/*</Body>*/}
          {/*<Right>*/}
            {/*<Picker*/}
              {/*note*/}
              {/*mode="dialog"*/}
              {/*style={{ width: 150 }}*/}
              {/*selectedValue={this.state.selected1}*/}
              {/*onValueChange={this.onValueChange.bind(this)}*/}
            {/*>*/}
              {/*<Item label={I18n.t('settingsPersonIndividual')} value="key0" />*/}
            {/*</Picker>*/}
          {/*</Right>*/}
        {/*</ListItem>*/}
      </Content>
    </Container>
    )
  }
}
