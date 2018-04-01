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
  Body, Text
} from 'native-base'

// Styles
import styles from './Styles/SettingsScreenStyles'
import I18n from '../I18n'
import Label from '../Components/Label'
import ListMoneyInput from '../Components/ListMoneyInput'
import PropTypes from 'prop-types'
import * as actions from '../Redux/SettingsScreen/actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import ListPercentInput from '../Components/ListPercentInput'

class SettingsScreen extends Component {
  componentDidMount() {
    Keyboard.dismiss()
  }

  static propTypes = {
    settings: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      settings: props.settings
    };
    this.prevSettings =  props.settings;
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onResetButtonPress = this.onResetButtonPress.bind(this);
  }

  onSettingsValueChange(property, newValue) {
    let settings = this.state.settings
    settings[property] = newValue
    this.setState({
      settings: settings
    })
  }

  onBackButtonPress() {
    this.setState({
      settings: this.prevSettings
    })
    this.props.navigation.goBack()
  }

  onResetButtonPress() {
    const defaultSettings = {
      minimalSalary: 3723,
      costOfLiving: 1762,
      SSCP: 22,
      firstGroupSTP: 10,
      secondGroupSTP: 20,
      thirdGroupSTPWithTax: 3,
      thirdGroupSTPWithoutTax: 5,
    }
    this.setState({
      settings: defaultSettings
    })
    this.props.onSettingsSave(defaultSettings)
  }

  render () {
    return (
    <Container style={styles.container}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <Header>
        <Left>
          <Button transparent onPress={this.onBackButtonPress}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
        <Title style={styles.title}>{ I18n.t('settings') }</Title>
        </Body>
        <Right/>
      </Header>

      <Content padder>
        <Label text={I18n.t('minimalLivingCost')}/>
        <ListMoneyInput
          placeholder={I18n.t('pmpo')}
          value={String(this.state.settings.costOfLiving)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'costOfLiving')}
        />

        <Label text={I18n.t('income')}/>
        <ListMoneyInput
          placeholder={I18n.t('minimalSalary')}
          value={String(this.state.settings.minimalSalary)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'minimalSalary')}
        />

        <Label text={I18n.t('singleTaxRate')}/>
        <ListPercentInput
          placeholder={I18n.t('taxGroupFirst')}
          value={String(this.state.settings.firstGroupSTP)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'firstGroupSTP')}
        />
        <ListPercentInput
          placeholder={I18n.t('taxGroupSecond')}
          value={String(this.state.settings.secondGroupSTP)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'secondGroupSTP')}
        />
        <ListPercentInput
          placeholder={I18n.t('thirdGroupVAT')}
          value={String(this.state.settings.thirdGroupSTPWithTax)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'thirdGroupSTPWithTax')}
        />
        <ListPercentInput
          placeholder={I18n.t('thirdGroupNoVAT')}
          value={String(this.state.settings.thirdGroupSTPWithoutTax)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'thirdGroupSTPWithoutTax')}
        />

        <Label text={I18n.t('singleSocialContribution')}/>
        <ListPercentInput
          placeholder={I18n.t('sscRate')}
          value={String(this.state.settings.SSCP)}
          onChangeValue={this.onSettingsValueChange.bind(this, 'SSCP')}
        />

        <Button block warning style={styles.resetButton} onPress={this.onResetButtonPress}>
          <Text>{I18n.t('restoreDefault')}</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

export default connect(
  mapStateToProps,
  actions,
)(SettingsScreen);
