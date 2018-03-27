import React, { Component } from 'react'
import { Image, Keyboard } from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
import PropTypes from 'prop-types'
import * as actions from '../Redux/MainScreenActions'

class MainScreen extends Component {

  static propTypes = {
    totalIncome: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      totalIncome: props.totalIncome
    };

    this.calculateTaxes = this.calculateTaxes.bind(this);
    this.onIncomeChanged = this.onIncomeChanged.bind(this);
  }

  onIncomeChanged(newValue) {
    this.setState({
      totalIncome: newValue
    })
  }

  calculateTaxes() {
    console.log(this.state.totalIncome)
    let tax = this.state.totalIncome * 0.1;
    Keyboard.dismiss()
    this.props.navigation.navigate('ResultsScreen', {
      income: this.state.totalIncome,
      tax: tax
    })
  }

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
          value={String(this.state.totalIncome)}
          onChangeValue={this.onIncomeChanged}
        />

        <Button block success style={styles.calculateButton} onPress={this.calculateTaxes}>
          <Text>{I18n.t('calculate')}</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalIncome: state.mainScreen.totalIncome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
