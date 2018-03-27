import {combineReducers, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer
})


const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer);
export const persistor = persistStore(store);
