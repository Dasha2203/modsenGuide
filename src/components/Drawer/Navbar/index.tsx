import { useEffect, useState } from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'

import Link from 'components/Link'
import useAuth from 'hooks/use-auth'
import LoginIcon from 'icons/LoginIcon'
import FavoriteIcon from 'icons/FavoriteIcon'
import SearchIcon from 'icons/SearchIcon'
import { AvatarButton, Button, ButtonGroup, Logo, WrapNavbar } from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import IconButton from 'components/IconButton'

const Navbar = () => {
  const { email } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

      {true ? (
        <AvatarButton onClick={handleClick}>
          <Avatar />
        </AvatarButton>
      ) : (
        <Link href="/login">
          <LoginIcon />
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