import { all } from 'redux-saga/effects'

import authWatcher from './auth'

export default function * () {
  yield all([authWatcher()])
}
