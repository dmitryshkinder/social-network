import { all } from 'redux-saga/effects'

import authWatcher from './auth'
import userWatcher from './user'
import getUsersWorker from './users'

export default function * () {
  yield all([authWatcher(), userWatcher(), getUsersWorker()])
}
