import {combineReducers, createStore} from 'redux'
import { persistStore, persistReducer, persistCombineReducers, autoMergeLevel1 } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['nav'],
  whitelist: ['settings'],
};

export const reducers = persistCombineReducers(persistConfig, {
  nav: require('./NavigationRedux').reducer,
  settings: require('./SettingsScreen/reducers').reducer
})


export const store = createStore(reducers, undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
