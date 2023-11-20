import { Box, styled, Typography } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: '1000',
  padding: '19px 20px 24px',
  width: '100%',
  maxWidth: '414px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',

  [theme.breakpoints.down('sm')]: {
    top: '10px',
    left: '10px',
    padding: '10px',
    with: 'auto',
    maxWidth: '160px'
  },
}))

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '57px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '20px'
  },
}))

export const Property = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',

  [theme.breakpoints.down('sm')]: {
    width: 'fit-content',
    gap: 0
  },
}))

export const Value = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 800,
  color: '#405F7B',

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  },
}))

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: '#405F7B',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
}))