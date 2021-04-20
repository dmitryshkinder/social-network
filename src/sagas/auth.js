import firebase from '@/firebase'
import { call, put, takeEvery } from 'redux-saga/effects'

import { SIGN_IN_EMAIL_AUTH, SIGN_OUT, REGISTER_REQUEST } from '@/constants'
import { loginSuccess, createError, signOutSuccess, registerSuccess } from '@/actions'

export default function * () {
  yield takeEvery(SIGN_IN_EMAIL_AUTH, signInEmailAuthWorker)
  yield takeEvery(REGISTER_REQUEST, registerRequestWorker)
  yield takeEvery(SIGN_OUT, signOuthWorker)
}

function * signInEmailAuthWorker ({ payload }) {
  const actionSignInEmailAuth = yield call(signInEmailAuthFunc, payload)
  yield put(actionSignInEmailAuth)
}

async function signInEmailAuthFunc ({ email, password }) {
  const action = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => loginSuccess())
    .catch(err => createError(err))
  return action
}

function * registerRequestWorker ({ payload }) {
  const actionRegisterRequest = yield call(registerRequestFunc, payload)
  yield put(actionRegisterRequest)
}

async function registerRequestFunc ({ email, password, firstName, lastName }) {
  const action = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      return firebase.firestore().collection('users').doc(resp.user.uid).set({
        firstName,
        lastName,
      })
    })
    .then(() => registerSuccess())
    .catch(err => createError(err))
  return action
}

function * signOuthWorker () {
  const action = yield call(signOutFunc)
  yield put(action)
}

async function signOutFunc () {
  const action = await firebase
    .auth()
    .signOut()
    .then(() => signOutSuccess())
  return action
}
