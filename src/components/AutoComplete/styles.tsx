import styled from '@emotion/styled/macro'
import { Autocomplete, TextField } from '@mui/material'

export const StyledAutoComplete = styled(Autocomplete)``

export const AutoCompleteInput = styled(TextField)(() => ({
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