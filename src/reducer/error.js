import {
  CLEAR_ERRORS,
  CREATE_ERROR,
} from '@/constants'

const initState = {
  errorMessage: null,
}

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        errorMessage: null,
      }

    default:
      return state
  }
}

export default errorReducer
