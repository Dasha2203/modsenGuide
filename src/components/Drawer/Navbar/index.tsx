import { Avatar, Menu, MenuItem } from '@mui/material'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import { useAppDispatch } from 'hooks/redux-hooks'
import useAuth from 'hooks/use-auth'
import FavoriteIcon from 'icons/FavoriteIcon'
import LoginIcon from 'icons/LoginIcon'
import SearchIcon from 'icons/SearchIcon'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'store/slices/user/actionCreators'

import { AvatarButton, ButtonGroup, Logo, WrapNavbar } from './style'

const Navbar = () => {
  const { isAuth, email } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    dispatch(logout())

  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <WrapNavbar>
      <Logo />
      <ButtonGroup>
        <IconButton
          onClick={() => navigate('/')}
          active={pathname === '/'}
          color="primary"
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          onClick={() => navigate('/favorites')}
          active={pathname === '/favorites'}
          color="secondary"
        >
          <FavoriteIcon />
        </IconButton>
      </ButtonGroup>

      {isAuth ? (
        <AvatarButton onClick={handleClick}>
          <Avatar />
        </AvatarButton>
      ) : (
        <Link to="/login" sx={{mt: 'auto'}}>
          <LoginIcon width={60}/>
        </Link>
      )}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </WrapNavbar>
  )
}

export default Navbar