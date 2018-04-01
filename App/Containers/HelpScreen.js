import React, { Component } from 'react'
import { Image, Keyboard, Text, View } from 'react-native'

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
import styles from './Styles/HelpScreenStyles'
import I18n from '../I18n'

export default class HelpScreen extends Component {
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
        <Title style={styles.title}>{ I18n.t('help') }</Title>
        </Body>
        <Right/>
      </Header>

      <Content padder>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            { I18n.t('helpContent') }
          </Text>
        </View>
      </Content>
    </Container>
    )
  }
}
