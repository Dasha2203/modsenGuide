import { styled } from '@mui/material'
import Link from 'components/Link'

export const StyledLink = styled(Link)(() => ({
  display: 'inline-flex', 
  gap: '15px',
  fontSize: '20px',
  fontWeight: 800,
  textDecoration: 'none',
  color: '#373737'
}))