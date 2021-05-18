import { GET_USER_SUCCESS } from '@/constants'

const initState = {}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducer
