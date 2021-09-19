import { combineReducers } from 'redux'
import userReducer from './user'
import oantutiReducer from './oantuti'

const rootReducer = combineReducers({
    userReducer,
    oantutiReducer,
})
export default rootReducer