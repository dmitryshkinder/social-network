import React from 'react'
import pt from 'prop-types'

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const Profile = ({ user, ownUserProfile = false }) => {
  return (
    <Box m={5}>
      <Box display="flex">
        <Box mr={3}>
          <Avatar style={{ height: '120px', width: '120px' }} />
        </Box>
        <Box>
          <Box mb={2}>
            <h2>{user.name}</h2>
          </Box>
          {ownUserProfile && (
            <Button color="primary" variant="contained">
              РЕДАКТИРОВАТЬ ПРОФИЛЬ
            </Button>
          )}
        </Box>
      </Box>
      <Box>
        <h2>Основная иформация</h2>
        <p>{user.city}</p>
      </Box>
      <Box mb={2}>
        <h2>Обо мне</h2>
        <p>{user.aboutMe}</p>
      </Box>
      <Box display="flex" align="center" mb={2}>
        {user.skills.map(skill => (
          <Box mr={1} key={skill.key}>
            <Chip label={skill.label} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

Profile.propTypes = {
  user: pt.object.isRequired,
  ownUserProfile: pt.bool,
}

export default Profile
