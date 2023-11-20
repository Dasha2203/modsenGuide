import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import useAuth from 'hooks/use-auth'
import FavoriteIcon from 'icons/FavoriteIcon'
import LoginIcon from 'icons/LoginIcon'
import SearchIcon from 'icons/SearchIcon'
import { setOpenSearchBar } from 'store/slices/app/appSlice'
import { logout } from 'store/slices/user/actionCreators'

import IconButton from 'components/IconButton'
import Link from 'components/Link'

import { AvatarButton, ButtonGroup, Logo, WrapNavbar } from './style'

const Navbar = () => {
  const { isAuth } = useAuth()
  const { openSearchBar } = useAppSelector(state => state.appReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    handleClose()
  }

  const handleSearch = () => {
    navigate('/')
    dispatch(setOpenSearchBar(!openSearchBar))
  }

  return (
    <WrapNavbar>
      <Logo onClick={() => dispatch(setOpenSearchBar(!openSearchBar))} />
      <ButtonGroup>
        <IconButton
          onClick={handleSearch}
          active={pathname === '/'}
          color="primary"
        >
          <SearchIcon />
        </IconButton>
        {isAuth && (
          <IconButton
            onClick={() => navigate('/favorites')}
            active={pathname === '/favorites'}
            color="secondary"
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </ButtonGroup>

      {isAuth ? (
        <AvatarButton onClick={handleClick}>
          <Avatar />
        </AvatarButton>
      ) : (
        <Link to="/login" className="logout">
          <IconButton color="secondary" typeColor="dark">
            <LoginIcon />
          </IconButton>
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </WrapNavbar>
  )
}

export default Navbar