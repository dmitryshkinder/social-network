import React from 'react'
import { useLocation } from 'react-router-dom'

import StandardLayout from '@/components/layouts/Standard'

import Profile from '@/components/blocks/Profile'

const ProfilePage = () => {
  const location = useLocation()
  const { user } = location.state

  return (
    <StandardLayout>
      <Profile user={user} />
    </StandardLayout>
  )
}

export default ProfilePage
