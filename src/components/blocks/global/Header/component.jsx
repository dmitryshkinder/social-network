import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { HOME_PAGE_PATH, PROFILE_PATH } from '@/constants'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import { signOut } from '@/actions'

import IconsContainer from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const [anchorElementMenu, setAnchorElementMenu] = React.useState(null)
  const isMenuOpen = Boolean(anchorElementMenu)

  const onSignOutHandler = () => {
    dispatch(signOut())
  }

  const onClickMenuHandler = event => {
    setAnchorElementMenu(event.currentTarget)
  }

  const onCloseMenuHandler = () => {
    setAnchorElementMenu(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconsContainer>
          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onClickMenuHandler}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElementMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={onCloseMenuHandler}
            >
              <MenuItem>
                <Link to={PROFILE_PATH}>Профиль</Link>
              </MenuItem>
              <MenuItem>
                <Link to={HOME_PAGE_PATH}>Клуб</Link>
              </MenuItem>
              {/* <MenuItem>
                <Link to={HOME_PAGE_PATH}>Настройки</Link>
              </MenuItem> */}
              <MenuItem onClick={onSignOutHandler}>Выйти</MenuItem>
            </Menu>
          </div>
        </IconsContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
