import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 12,
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
