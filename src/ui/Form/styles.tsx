import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const FormContainer = styled(Box)(() => ({
  margin: '0 auto',
  maxWidth: '500px',
}))

export const FormLink = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '5px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
}))

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '38px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}))