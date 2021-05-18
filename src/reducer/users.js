import { GET_USERS_SUCCESS, CLEAR_USERS } from '@/constants'

const initState = []

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return [
        ...state,
        ...action.payload,
      ]
    case CLEAR_USERS:
      return []
    default:
      return state
  }
}

export default usersReducer
