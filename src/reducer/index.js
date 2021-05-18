import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import internalization from './internalization'
import error from './error'
import user from './user'
import users from './users'

export default combineReducers({
  internalization,
  error,
  user,
  users,
  firebase: firebaseReducer,
})
