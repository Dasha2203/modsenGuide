import styled from '@emotion/styled/macro'
import { Box, TextField, Typography } from '@mui/material'

export const StyledInput = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '10px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#C4C4C4',
      borderWidth: 3
    },
    '&.Mui-focused fieldset': {
      borderWidth: 3
    }
  }
}))

export const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  '& .MuiInputBase-sizeSmall': {
    maxWidth: '100px'
  }
}))

export const InputUnit = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700
}))