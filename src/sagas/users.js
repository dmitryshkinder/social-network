import { firestore } from '@/firebase'
import { call, put, takeEvery } from 'redux-saga/effects'

import { GET_USERS_REQUEST } from '@/constants'
import { getUsersSuccess } from '@/actions'

export default function * () {
  yield takeEvery(GET_USERS_REQUEST, getUsersWorker)
}

function * getUsersWorker ({ payload }) {
  const actionGetUsers = yield call(getUsersFunc, payload)
  yield put(actionGetUsers)
}

async function getUsersFunc () {
  const action = await firestore
    .collection('user')
    .get()
    .then(snapshot => {
      const users = snapshot.docs.map(doc => doc.data())
      return getUsersSuccess(users)
    })
    .catch(error => console.log(error))
  return action
}
