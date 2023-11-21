import { styled } from '@mui/material'
import Link from '@ui/Link'

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'inline-grid',
  alignItems: 'center', 
  gap: '15px',
  fontSize: '20px',
  fontWeight: 800,
  textDecoration: 'none',
  color: '#373737',
  gridTemplateColumns: '22px auto',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '15px auto',
    gap: '5px',
    fontSize: '16px'
  },
}))