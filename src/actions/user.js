import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  CLEAR_USERS,
} from '@/constants'

export const createUserRequest = value => ({
  type: CREATE_USER_REQUEST,
  payload: value,
})

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
  payload: null,
})

export const updateUserRequest = value => ({
  type: UPDATE_USER_REQUEST,
  payload: value,
})

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
  payload: null,
})

export const getUserRequest = id => ({
  type: GET_USER_REQUEST,
  payload: id,
})

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
  payload: null,
})

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const clearUsers = () => ({
  type: CLEAR_USERS,
  payload: null,
})
