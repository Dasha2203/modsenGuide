import { useState } from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'

import Link from 'components/Link'
import useAuth from 'hooks/use-auth'
import LoginIcon from 'icons/LoginIcon'
import FavoriteIcon from 'icons/FavoriteIcon'
import SearchIcon from 'icons/SearchIcon'
import { AvatarButton, Button, ButtonGroup, Logo, WrapNavbar } from './style'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { email } = useAuth()
  const navigate = useNavigate()
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
        <Button onClick={() => navigate('/')}>
          <SearchIcon fill="#5E7BC7" />
        </Button>
        <Button onClick={() => navigate('/favorites')}>
          <FavoriteIcon />
        </Button>
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