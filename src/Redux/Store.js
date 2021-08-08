import {createStore,combineReducers} from 'redux'
import loginReducer from './Reducers'

const reducers = combineReducers({
    loginReducer : loginReducer
})

const configureStore = ()=> createStore(reducers);

export default configureStore;