import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import internalization from './internalization'
import error from './error'

export default combineReducers({
  internalization,
  error,
  firebase: firebaseReducer,
})
