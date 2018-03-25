import { StackNavigator } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import SettingsScreen from '../Containers/SettingsScreen'

import ResultsScreen from '../Containers/ResultsScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainScreen: { screen: MainScreen },
  SettingsScreen: { screen: SettingsScreen},
  ResultsScreen: {screen: ResultsScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
})

export default PrimaryNav
