import {
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGN_IN_EMAIL_AUTH,
  SIGN_OUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '@/constants'

export const registerRequest = value => ({
  type: REGISTER_REQUEST,
  payload: value,
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  payload: null,
})

export const signInEmailAuth = value => ({
  type: SIGN_IN_EMAIL_AUTH,
  payload: value,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: null,
})

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
  payload: null,
})

export const signOut = value => ({
  type: SIGN_OUT,
  payload: value,
})
