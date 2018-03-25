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
  Text
} from "native-base";

// Styles
import styles from './Styles/MainScreenStyles'
import I18n from '../I18n'
import Label from '../Components/Label'
import ListDropdown from '../Components/ListDropdown'
import ListMoneyInput from '../Components/ListMoneyInput'

export default class MainScreen extends Component {
  render () {
    return (
    <Container style={styles.container}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('SettingsScreen')}>
            <Icon name="settings" />
          </Button>
        </Left>
        <Body>
        <Title>Tax calculator</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="help" />
          </Button>
        </Right>
      </Header>

      <Content padder>
        <Label text={I18n.t('taxSystem')}/>
        <ListDropdown
          selectedValue={I18n.t('personIndividual')}
          dropdownText={I18n.t('person')}
          dropdownItems={[I18n.t('personIndividual')]}
        />

        <ListDropdown
          selectedValue={I18n.t('taxSystemSimplified')}
          dropdownText={I18n.t('taxSystem')}
          dropdownItems={[I18n.t('taxSystemSimplified')]}
        />

        <ListDropdown
          selectedValue={I18n.t('taxGroupFirst')}
          dropdownText={I18n.t('taxGroup')}
          dropdownItems={[I18n.t('taxGroupFirst'), I18n.t('taxGroupThird')]}
        />

        <Label text={I18n.t('income')}/>
        <ListMoneyInput
          placeholder={I18n.t('incomeAmount')}
          defaultValue={"125"}
        />

        <Button block success style={styles.calculateButton} onPress={() => this.props.navigation.navigate('ResultsScreen')}>
          <Text>{I18n.t('calculate')}</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}
