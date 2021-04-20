import {
  CREATE_ERROR,
  CLEAR_ERRORS,
} from '@/constants'

export const createError = value => ({
  type: CREATE_ERROR,
  payload: value,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  payload: null,
})
