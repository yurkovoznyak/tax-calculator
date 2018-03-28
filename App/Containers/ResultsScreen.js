import React, { Component } from 'react'
import { Image, Keyboard } from 'react-native'

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
    const { params } = this.props.navigation.state;
    const income = params.income || 0;
    const totalTax = params.totalTax || 0;
    const sscTax = params.sscTax || 0;
    const singleTax = params.singleTax || 0;
    const pdfo = params.pdfo || 0;
    const militaryTax = params.militaryTax || 0;
    const vat = params.vat || 0;
    const taxSystem = params.taxSystem || 'taxSystemSimplified';
    const taxGroup = params.taxGroup || 'taxGroupFirst';

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
        <ResultsConditions taxGroup={I18n.t(taxGroup)} taxSystem={I18n.t(taxSystem)}/>

        <ResultsItem header={I18n.t('income')} number={income}/>
        <ResultsItem header={I18n.t('totalTaxes')} number={totalTax}/>
        <ResultsItem header={I18n.t('esv')} number={sscTax}/>
        <ResultsItem header={I18n.t('pdfo')} number={pdfo}/>
        <ResultsItem header={I18n.t('militaryCollection')} number={militaryTax}/>
        <ResultsItem header={I18n.t('vat')} number={vat}/>
        <ResultsItem header={I18n.t('singleTax')} number={singleTax}/>


      </Content>
    </Container>
    )
  }
}
