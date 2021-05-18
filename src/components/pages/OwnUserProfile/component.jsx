import React from 'react'
import { useSelector } from 'react-redux'

import StandardLayout from '@/components/layouts/Standard'
import Profile from '@/components/blocks/Profile'

const OwnUserProfilePage = () => {
  const user = useSelector(state => state.user)
  return (
    <StandardLayout>
      <Profile user={user} ownUserProfile />
    </StandardLayout>
  )
}

export default OwnUserProfilePage
