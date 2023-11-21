import { styled } from '@mui/material'
import { Box } from '@mui/material'

export const Wrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',

  '& img': {
    width: '30px',
    height: '30x',
    borderRadius: '50%'
  },

  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '20px',
      height: '20x',
    },
  }
}))