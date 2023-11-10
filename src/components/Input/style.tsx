import { TextField } from '@mui/material'
import styled from '@emotion/styled/macro'

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