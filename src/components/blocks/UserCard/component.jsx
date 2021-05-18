import React, { useState } from 'react'
import pt from 'prop-types'
import { Redirect } from 'react-router-dom'

import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Card from './styles'

const UserCard = ({ user }) => {
  const [redirected, setRedirect] = useState()

  const openProfileHandler = () => {
    setRedirect(state => !state)
  }

  if (redirected) {
    return (
      <Redirect
        to={{
          pathname: `/${user.id}`,
          state: { user },
        }} />
    )
  }

  return (
    <Box textAlign="left">
      <Card variant="outlined">
        <Box p={2} display="flex" mt={2}>
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
          <Box ml={2}>
            <Box mb={2}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="subtitle2">{user.city}</Typography>
            </Box>
            <Box variant="body2" mb={2}>
              {user.aboutMe}
            </Box>
            <Box display="flex" align="center" mb={2}>
              {user.skills.map(skill => (
                <Box mr={1} key={skill.key}>
                  <Chip label={skill.label} />
                </Box>
              ))}
            </Box>
            <Box>
              <Button onClick={openProfileHandler} color="primary">
                Открыть профиль
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

UserCard.propTypes = {
  user: pt.object.isRequired,
}

export default UserCard
