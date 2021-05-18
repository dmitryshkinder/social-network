import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersRequest } from '@/actions'
import StandardLayout from '@/components/layouts/Standard'
import UserCard from '@/components/blocks/UserCard'

import Box from '@material-ui/core/Box'

const Clubmates = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])

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
