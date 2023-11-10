import { forwardRef } from 'react'
import { OutlinedTextFieldProps } from '@mui/material'

import { StyledInput } from './style'

const Input = forwardRef<HTMLInputElement, OutlinedTextFieldProps>(({
  label,
  onChange,
  value,
  error,
  helperText,
  size,
  variant
}, forwardRef) => (
  <StyledInput
    ref={forwardRef}
    label={label}
    onChange={onChange}
    value={value}
    fullWidth={true}
    size={size}
    margin="normal"
    variant={variant}
    error={error}
    helperText={helperText}
  />
))

export default Input