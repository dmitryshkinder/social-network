import { GET_USERS_SUCCESS } from '@/constants'

const initState = []

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return [
        ...state,
        ...action.payload,
      ]
    default:
      return state
  }
}

export default usersReducer
