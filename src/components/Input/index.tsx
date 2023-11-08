import { OutlinedTextFieldProps, TextField } from '@mui/material'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, OutlinedTextFieldProps>(({ label, onChange, value, error, helperText, size, variant }, forwardRef) => (
  <TextField
    ref={forwardRef}
    label={label}
    onChange={onChange}
    value={value}
    fullWidth={true}
    size={size}
    variant={variant}
    margin="normal"
    error={error}
    helperText={helperText}
    sx={{
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
      },

    }}
  />
))

export default Input