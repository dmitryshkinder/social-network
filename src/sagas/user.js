import { nanoid } from 'nanoid'

import { firestore } from '@/firebase'
import { call, put, takeEvery } from 'redux-saga/effects'

import { CREATE_USER_REQUEST, GET_USER_REQUEST } from '@/constants'
import { createUserSuccess, getUserSuccess, getUserRequest } from '@/actions'

export default function * () {
  yield takeEvery(CREATE_USER_REQUEST, createUserWorker)
  yield takeEvery(GET_USER_REQUEST, getUserWorker)
}

function * createUserWorker ({ payload }) {
  const { id } = payload
  const actionCreateUser = yield call(createUserFunc, payload)
  yield put(actionCreateUser)
  yield put(getUserRequest(id))
}

function * getUserWorker ({ payload }) {
  const actionGetUser = yield call(getUserFunc, payload)
  yield put(actionGetUser)
}

async function createUserFunc ({
  id = '',
  name = '',
  city = '',
  aboutMe = '',
  instagram = '',
  facebook = '',
  ownSite = '',
  linkedin = '',
  skills = '',
  telegram = '',
  twitter = '',
  vk = '',
}) {
  const action = await firestore
    .collection('user')
    .doc(id)
    .set({
      name,
      city,
      aboutMe,
      instagram,
      facebook,
      ownSite,
      linkedin,
      skills,
      telegram,
      twitter,
      vk,
      id: nanoid(),
    })
    .then(() => createUserSuccess())
    .catch(error => console.log(error))
  return action
}

async function getUserFunc (id) {
  const action = await firestore
    .collection('user')
    .doc(id)
    .get()
    .then(snapshot => {
      if (snapshot.exists) {
        const user = snapshot.data()
        return getUserSuccess(user)
      }
    })
    .catch(error => console.log(error))
  return action
}
