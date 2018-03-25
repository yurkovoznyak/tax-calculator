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
  Body
} from 'native-base'

// Styles
import styles from './Styles/SettingsScreenStyles'
import I18n from '../I18n'
import Label from '../Components/Label'
import ResultsConditions from '../Components/ResultsConditions'
import ResultsItem from '../Components/ResultsItem'

export default class ResultsScreen extends Component {
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
        <Title style={styles.title}>{ I18n.t('results') }</Title>
        </Body>
        <Right/>
      </Header>

      <Content padder>
        <Label text={I18n.t('calculations')}/>
        <ResultsConditions taxGroup={I18n.t('taxGroupFirst')} taxSystem={I18n.t('taxSystemSimplified')}/>

        <ResultsItem header={I18n.t('income')} number={564654100.858}/>
        <ResultsItem header={I18n.t('totalTaxes')} number={564654100.858}/>
        <ResultsItem header={I18n.t('esv')} number={564654100.858}/>
        <ResultsItem header={I18n.t('pdfo')} number={564654100.858}/>
        <ResultsItem header={I18n.t('militaryCollection')} number={564654100.858}/>
        <ResultsItem header={I18n.t('vat')} number={564654100.858}/>
        <ResultsItem header={I18n.t('singleTax')} number={564654100.858}/>


      </Content>
    </Container>
    )
  }
}
