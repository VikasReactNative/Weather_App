import { combineReducers, createStore, applyMiddleware } from 'redux';
import AuthReducer from './AuthReducer'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
}
const AppReducers = combineReducers({
    AuthReducer: persistReducer(persistConfig, AuthReducer),
});
const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

const middleWares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleWares))
export const persistor = persistStore(store)
export default store;