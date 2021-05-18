import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { FILLING_PROFILE_PATH } from '@/constants'
import { getUsersRequest, getUserRequest } from '@/actions'
import StandardLayout from '@/components/layouts/Standard'
import UserCard from '@/components/blocks/UserCard'

import Box from '@material-ui/core/Box'

const Clubmates = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  // const auth = useSelector(state => state.firebase.auth)

  useEffect(() => {
    dispatch(getUsersRequest())
    // if (auth.isLoaded) dispatch(getUserRequest(auth.uid))
  }, [])

  // const user = useSelector(state => state.user)

  // if (!user.name) {
  //   return <Redirect to={FILLING_PROFILE_PATH} />
  // }

  return (
    <StandardLayout>
      <>
        <Box textAlign="center">
          <Box mb={4}>
            <h1>Список участников</h1>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {users.map(user => (
            <Box mr={3} mb={2} key={user.name + user.city}>
              <UserCard user={user} />
            </Box>
          ))}
        </Box>
      </>
    </StandardLayout>
  )
}

export default Clubmates
