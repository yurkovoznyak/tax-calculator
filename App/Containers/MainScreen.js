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
    settings: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      settings: props.settings,
      taxGroup: 'taxGroupFirst'
    };

    this.calculateTaxes = this.calculateTaxes.bind(this);
    this.onIncomeChanged = this.onIncomeChanged.bind(this);
    this.onTaxGroupValueChanged = this.onTaxGroupValueChanged.bind(this);
  }

  onIncomeChanged(newValue) {
    this.setState({
      totalIncome: newValue,
    })
  }

  onTaxGroupValueChanged(value) {
    this.setState({
      taxGroup: value
    })
  }

  calculateTaxes() {
    let singleTax = 0;
    const sscTax = this.state.settings.minimalSalary * this.state.settings.SSCP / 100;

    switch (this.state.taxGroup) {
      case 'taxGroupFirst':
        singleTax = this.state.settings.costOfLiving * this.state.settings.firstGroupSTP / 100;
        break;
      case 'taxGroupSecond':
        singleTax = this.state.settings.minimalSalary * this.state.settings.secondGroupSTP / 100;
        break;
    }

    const totalTax = sscTax + singleTax;
    Keyboard.dismiss();
    this.props.navigation.navigate('ResultsScreen', {
      income: this.state.totalIncome,
      totalTax: totalTax,
      sscTax: sscTax,
      singleTax: singleTax,
      taxGroup: this.state.taxGroup
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
          selectedValue={'personIndividual'}
          dropdownText={I18n.t('person')}
          dropdownItems={['personIndividual']}
          onItemSelect={()=>{}}
        />

        <ListDropdown
          selectedValue={'taxSystemSimplified'}
          dropdownText={I18n.t('taxSystem')}
          dropdownItems={['taxSystemSimplified']}
          onItemSelect={()=>{}}
        />

        <ListDropdown
          selectedValue={this.state.taxGroup}
          dropdownText={I18n.t('taxGroup')}
          dropdownItems={['taxGroupFirst', 'taxGroupSecond', 'taxGroupThird']}
          onItemSelect={this.onTaxGroupValueChanged}
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
    settings: state.mainScreen.settings
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
